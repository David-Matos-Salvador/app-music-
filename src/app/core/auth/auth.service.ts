import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { API_URL, toFormData } from '../api';
import { User } from '../models';

interface Session {
  user: User;
  token: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Registration extends Credentials {
  name: string;
  surname: string;
}

export type ProfileChanges = Pick<User, 'name' | 'surname' | 'email'>;

const STORAGE_KEY = 'app-music.session';

function readSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly session = signal<Session | null>(readSession());

  readonly user = computed(() => this.session()?.user ?? null);
  readonly token = computed(() => this.session()?.token ?? null);
  readonly isLoggedIn = computed(() => this.session() !== null);
  readonly isAdmin = computed(() => this.user()?.role === 'ROLE_ADMIN');

  login(credentials: Credentials): Observable<User> {
    return this.http.post<Session>(`${API_URL}/login`, credentials).pipe(
      tap((session) => this.store(session)),
      map((session) => session.user),
    );
  }

  register(data: Registration): Observable<User> {
    return this.http.post<{ user: User }>(`${API_URL}/register`, data).pipe(map((res) => res.user));
  }

  updateProfile(changes: ProfileChanges): Observable<User> {
    return this.http
      .put<{ user: User }>(`${API_URL}/update-user/${this.requireUser()._id}`, changes)
      .pipe(
        map((res) => res.user),
        tap((user) => this.setUser(user)),
      );
  }

  uploadAvatar(file: File): Observable<User> {
    return this.http
      .post<{ user: User }>(
        `${API_URL}/upload-image/${this.requireUser()._id}`,
        toFormData('image', file),
      )
      .pipe(
        map((res) => res.user),
        tap((user) => this.setUser(user)),
      );
  }

  logout() {
    this.store(null);
    void this.router.navigate(['/login']);
  }

  private requireUser() {
    const user = this.user();
    if (!user) throw new Error('No hay sesión iniciada');
    return user;
  }

  private setUser(user: User) {
    const token = this.token();
    if (token) this.store({ user, token });
  }

  private store(session: Session | null) {
    this.session.set(session);
    if (session) localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    else localStorage.removeItem(STORAGE_KEY);
  }
}
