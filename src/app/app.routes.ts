import { Routes } from '@angular/router';
import { adminGuard, authGuard, guestGuard } from './core/auth/auth.guards';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Entrar · App Music',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/auth/login'),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell'),
    children: [
      { path: '', title: 'App Music', loadComponent: () => import('./features/home/home') },
      {
        path: 'artists',
        title: 'Artistas · App Music',
        loadComponent: () => import('./features/artists/artist-list'),
      },
      {
        path: 'artists/new',
        title: 'Nuevo artista · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/artists/artist-form'),
      },
      {
        path: 'artists/:id',
        title: 'Artista · App Music',
        loadComponent: () => import('./features/artists/artist-detail'),
      },
      {
        path: 'artists/:id/edit',
        title: 'Editar artista · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/artists/artist-form'),
      },
      {
        path: 'artists/:artistId/albums/new',
        title: 'Nuevo álbum · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/albums/album-form'),
      },
      {
        path: 'albums/:id',
        title: 'Álbum · App Music',
        loadComponent: () => import('./features/albums/album-detail'),
      },
      {
        path: 'albums/:id/edit',
        title: 'Editar álbum · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/albums/album-form'),
      },
      {
        path: 'albums/:albumId/songs/new',
        title: 'Nueva canción · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/songs/song-form'),
      },
      {
        path: 'songs/:id/edit',
        title: 'Editar canción · App Music',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/songs/song-form'),
      },
      {
        path: 'profile',
        title: 'Mi perfil · App Music',
        loadComponent: () => import('./features/profile/profile'),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
