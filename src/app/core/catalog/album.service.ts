import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL, toFormData } from '../api';
import { Album, AlbumInput, AlbumRecord } from '../models';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private readonly http = inject(HttpClient);

  /** Todos los álbumes, o solo los de un artista. */
  list(artistId?: string): Observable<Album[]> {
    const url = artistId ? `${API_URL}/albums/${artistId}` : `${API_URL}/albums`;
    return this.http.get<{ albums: Album[] }>(url).pipe(map((r) => r.albums));
  }

  get(id: string): Observable<Album> {
    return this.http.get<{ album: Album }>(`${API_URL}/album/${id}`).pipe(map((r) => r.album));
  }

  create(data: AlbumInput): Observable<AlbumRecord> {
    return this.http
      .post<{ album: AlbumRecord }>(`${API_URL}/album`, data)
      .pipe(map((r) => r.album));
  }

  update(id: string, data: Partial<AlbumInput>): Observable<AlbumRecord> {
    return this.http
      .put<{ album: AlbumRecord }>(`${API_URL}/album/${id}`, data)
      .pipe(map((r) => r.album));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${API_URL}/album/${id}`).pipe(map(() => undefined));
  }

  uploadImage(id: string, file: File): Observable<AlbumRecord> {
    return this.http
      .post<{ album: AlbumRecord }>(`${API_URL}/upload-img-album/${id}`, toFormData('image', file))
      .pipe(map((r) => r.album));
  }
}
