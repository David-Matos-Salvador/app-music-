import { computed, Injectable, signal } from '@angular/core';
import { fileUrl } from '../api';
import { Song } from '../models';

const STORAGE_KEY = 'app-music.last-song';

/** Estado global del reproductor. Es el único lugar que toca el elemento <audio>. */
@Injectable({ providedIn: 'root' })
export class PlayerService {
  private readonly audio = new Audio();
  private readonly queue = signal<Song[]>([]);
  private readonly index = signal(0);

  readonly current = computed<Song | null>(() => this.queue()[this.index()] ?? null);
  readonly playing = signal(false);
  readonly currentTime = signal(0);
  readonly duration = signal(0);
  readonly hasNext = computed(() => this.index() < this.queue().length - 1);
  readonly hasPrevious = computed(() => this.index() > 0);

  constructor() {
    this.audio.preload = 'metadata';
    this.audio.addEventListener('play', () => this.playing.set(true));
    this.audio.addEventListener('pause', () => this.playing.set(false));
    this.audio.addEventListener('timeupdate', () => this.currentTime.set(this.audio.currentTime));
    this.audio.addEventListener('loadedmetadata', () => this.duration.set(this.audio.duration));
    this.audio.addEventListener('ended', () =>
      this.hasNext() ? this.next() : this.playing.set(false),
    );

    const last = this.restore();
    if (last) this.load([last], 0);
  }

  /** Reproduce `song`, usando `queue` (p. ej. el álbum entero) como cola. */
  play(song: Song, queue: Song[] = [song]) {
    const playable = queue.filter((s) => fileUrl('song', s.file));
    const start = Math.max(
      playable.findIndex((s) => s._id === song._id),
      0,
    );
    this.load(playable, start);
    void this.audio.play();
  }

  isCurrent(song: Song) {
    return this.current()?._id === song._id;
  }

  toggle() {
    if (!this.current()) return;
    if (this.audio.paused) void this.audio.play();
    else this.audio.pause();
  }

  next() {
    if (!this.hasNext()) return;
    this.load(this.queue(), this.index() + 1);
    void this.audio.play();
  }

  previous() {
    // Como en cualquier reproductor: si ya ha avanzado, vuelve al inicio de la pista.
    if (this.audio.currentTime > 3 || !this.hasPrevious()) {
      this.seek(0);
      return;
    }
    this.load(this.queue(), this.index() - 1);
    void this.audio.play();
  }

  seek(seconds: number) {
    this.audio.currentTime = seconds;
  }

  private load(queue: Song[], index: number) {
    const song = queue[index];
    const src = song && fileUrl('song', song.file);
    if (!src) return;

    this.queue.set(queue);
    this.index.set(index);
    this.currentTime.set(0);
    this.duration.set(0);
    this.audio.src = src;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(song));
  }

  private restore(): Song | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Song) : null;
    } catch {
      return null;
    }
  }
}
