import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { errorMessage, fileUrl } from '../../core/api';
import { SongService } from '../../core/catalog/song.service';
import { FilePicker } from '../../shared/file-picker';
import { Icon } from '../../shared/icon';

/** Crea una canción en `:albumId` o edita la canción `:id`. */
@Component({
  selector: 'app-song-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, FilePicker, Icon],
  template: `
    <a class="back-link" [routerLink]="['/albums', albumId() ?? loadedAlbumId()]">
      <app-icon name="chevron-left" [size]="16" /> Volver al álbum
    </a>
    <h1 class="page-title">{{ id() ? 'Editar canción' : 'Nueva canción' }}</h1>

    <form class="form" [formGroup]="form" (ngSubmit)="save()" novalidate>
      @if (error()) {
        <p class="alert" role="alert">{{ error() }}</p>
      }
      <div class="form-row">
        <div class="field">
          <label for="number">Número de pista</label>
          <input id="number" type="number" min="1" inputmode="numeric" formControlName="number" />
          @if (form.controls.number.touched && form.controls.number.invalid) {
            <span class="field-error">Usa un número mayor que 0.</span>
          }
        </div>
        <div class="field">
          <label for="duration">Duración</label>
          <input id="duration" formControlName="duration" placeholder="3:45" />
          @if (form.controls.duration.touched && form.controls.duration.invalid) {
            <span class="field-error">Usa el formato minutos:segundos, por ejemplo 3:45.</span>
          }
        </div>
      </div>
      <div class="field">
        <label for="name">Título</label>
        <input id="name" formControlName="name" />
        @if (form.controls.name.touched && form.controls.name.invalid) {
          <span class="field-error">Escribe el título de la canción.</span>
        }
      </div>
      <div class="field">
        <span class="label">Audio</span>
        @if (currentAudio()) {
          <audio controls preload="none" [src]="currentAudio()"></audio>
        }
        <app-file-picker accept="audio/*" label="Elige un fichero de audio" [(file)]="audio" />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" [disabled]="saving()">
          {{ saving() ? 'Guardando…' : id() ? 'Guardar cambios' : 'Crear canción' }}
        </button>
      </div>
    </form>
  `,
  styles: `
    .page-title {
      margin-bottom: 2rem;
    }
    .label {
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--text-muted);
    }
    audio {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  `,
})
export default class SongForm implements OnInit {
  private readonly songService = inject(SongService);
  private readonly router = inject(Router);

  readonly id = input<string>();
  readonly albumId = input<string>();

  protected readonly form = inject(NonNullableFormBuilder).group({
    number: [1, [Validators.required, Validators.min(1)]],
    name: ['', Validators.required],
    duration: ['', Validators.pattern(/^\d{1,3}:[0-5]\d$/)],
  });
  protected readonly audio = signal<File | null>(null);
  protected readonly currentAudio = signal<string | null>(null);
  protected readonly loadedAlbumId = signal<string | null>(null);
  protected readonly saving = signal(false);
  protected readonly error = signal<string | null>(null);

  ngOnInit() {
    const id = this.id();
    if (!id) return;
    this.songService.get(id).subscribe({
      next: (song) => {
        this.form.patchValue(song);
        this.currentAudio.set(fileUrl('song', song.file));
        this.loadedAlbumId.set(song.album._id);
      },
      error: (err: unknown) => this.error.set(errorMessage(err)),
    });
  }

  protected save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const id = this.id();
    const data = this.form.getRawValue();
    const audio = this.audio();

    this.saving.set(true);
    this.error.set(null);
    (id
      ? this.songService.update(id, data)
      : this.songService.create({ ...data, album: this.albumId() ?? '' })
    )
      .pipe(switchMap((song) => (audio ? this.songService.uploadAudio(song._id, audio) : of(song))))
      .subscribe({
        next: (song) => void this.router.navigate(['/albums', song.album]),
        error: (err: unknown) => {
          this.error.set(errorMessage(err));
          this.saving.set(false);
        },
      });
  }
}
