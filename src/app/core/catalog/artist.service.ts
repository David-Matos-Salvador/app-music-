import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL, toFormData } from '../api';
import { Artist, ArtistInput, Page } from '../models';

interface ArtistPageResponse {
  artists: Artist[];
  total: number;
  page: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private readonly http = inject(HttpClient);

  getPage(page: number): Observable<Page<Artist>> {
    return this.http
      .get<ArtistPageResponse>(`${API_URL}/artists/${page}`)
      .pipe(map(({ artists, ...rest }) => ({ items: artists, ...rest })));
  }

  get(id: string): Observable<Artist> {
    return this.http.get<{ artist: Artist }>(`${API_URL}/artist/${id}`).pipe(map((r) => r.artist));
  }

  create(data: ArtistInput): Observable<Artist> {
    return this.http.post<{ artist: Artist }>(`${API_URL}/artist`, data).pipe(map((r) => r.artist));
  }

  update(id: string, data: ArtistInput): Observable<Artist> {
    return this.http
      .put<{ artist: Artist }>(`${API_URL}/artist/${id}`, data)
      .pipe(map((r) => r.artist));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${API_URL}/artist/${id}`).pipe(map(() => undefined));
  }

  uploadImage(id: string, file: File): Observable<Artist> {
    return this.http
      .post<{ artist: Artist }>(`${API_URL}/upload-img-artist/${id}`, toFormData('image', file))
      .pipe(map((r) => r.artist));
  }
}
