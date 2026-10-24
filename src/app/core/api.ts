import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const API_URL = environment.apiUrl;

const filePaths = {
  user: 'get-image',
  artist: 'get-img-artist',
  album: 'get-img-album',
  song: 'get_song',
} as const;

/** URL pública de un fichero subido, o `null` si no hay (la API v1 guardaba la cadena 'null'). */
export function fileUrl(kind: keyof typeof filePaths, fileName: string | null | undefined) {
  if (!fileName || fileName === 'null') return null;
  return `${API_URL}/${filePaths[kind]}/${encodeURIComponent(fileName)}`;
}

/** Convierte cualquier error HTTP en un mensaje legible para mostrar en la interfaz. */
export function errorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) return 'No se puede conectar con el servidor. Revisa tu conexión.';
    if (typeof error.error?.message === 'string') return error.error.message;
  }
  return 'Algo ha fallado. Inténtalo de nuevo.';
}

export function toFormData(field: string, file: File) {
  const data = new FormData();
  data.append(field, file, file.name);
  return data;
}
