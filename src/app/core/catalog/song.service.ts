import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL, toFormData } from '../api';
import { Song, SongInput, SongRecord } from '../models';

@Injectable({ providedIn: 'root' })
export class SongService {
  private readonly http = inject(HttpClient);

  /** Canciones de un álbum, ordenadas por número de pista. */
  listByAlbum(albumId: string): Observable<Song[]> {
    return this.http
      .get<{ songs: Song[] }>(`${API_URL}/songs/${albumId}`)
      .pipe(map((r) => r.songs));
  }

  get(id: string): Observable<Song> {
    return this.http.get<{ song: Song }>(`${API_URL}/song/${id}`).pipe(map((r) => r.song));
  }

  create(data: SongInput): Observable<SongRecord> {
    return this.http.post<{ song: SongRecord }>(`${API_URL}/song`, data).pipe(map((r) => r.song));
  }

  update(id: string, data: Partial<SongInput>): Observable<SongRecord> {
    return this.http
      .put<{ song: SongRecord }>(`${API_URL}/song/${id}`, data)
      .pipe(map((r) => r.song));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${API_URL}/song/${id}`).pipe(map(() => undefined));
  }

  uploadAudio(id: string, file: File): Observable<SongRecord> {
    return this.http
      .post<{ song: SongRecord }>(`${API_URL}/upload_song/${id}`, toFormData('file', file))
      .pipe(map((r) => r.song));
  }
}
