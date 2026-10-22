export type Role = 'ROLE_USER' | 'ROLE_ADMIN';

export interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  role: Role;
  image: string | null;
}

export interface Artist {
  _id: string;
  name: string;
  description: string;
  image: string | null;
}

export interface Album {
  _id: string;
  title: string;
  description: string;
  year: number;
  image: string | null;
  artist: Artist;
}

export interface Song {
  _id: string;
  number: number;
  name: string;
  duration: string;
  file: string | null;
  album: Album;
}

export interface Page<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
}

/** Datos que se envían al crear o editar (las relaciones van como id). */
export type ArtistInput = Pick<Artist, 'name' | 'description'>;
export type AlbumInput = Pick<Album, 'title' | 'description' | 'year'> & { artist: string };
export type SongInput = Pick<Song, 'number' | 'name' | 'duration'> & { album: string };

/** Lo que devuelven los endpoints de escritura: las relaciones vienen como id, sin poblar. */
export type AlbumRecord = Omit<Album, 'artist'> & { artist: string };
export type SongRecord = Omit<Song, 'album'> & { album: string };
