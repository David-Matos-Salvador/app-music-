import { HttpErrorResponse } from '@angular/common/http';
import { API_URL, errorMessage, fileUrl } from './api';

describe('fileUrl', () => {
  it('construye la URL del fichero según su tipo', () => {
    expect(fileUrl('album', 'portada.jpg')).toBe(`${API_URL}/get-img-album/portada.jpg`);
    expect(fileUrl('song', 'a b.mp3')).toBe(`${API_URL}/get_song/a%20b.mp3`);
  });

  it('devuelve null si no hay fichero (incluido el "null" de la API v1)', () => {
    expect(fileUrl('artist', null)).toBeNull();
    expect(fileUrl('artist', 'null')).toBeNull();
  });
});

describe('errorMessage', () => {
  it('usa el mensaje de la API', () => {
    const error = new HttpErrorResponse({ status: 409, error: { message: 'Ya existe' } });
    expect(errorMessage(error)).toBe('Ya existe');
  });

  it('explica los errores de conexión', () => {
    expect(errorMessage(new HttpErrorResponse({ status: 0 }))).toMatch(/conectar/);
  });

  it('tiene un mensaje genérico para el resto', () => {
    expect(errorMessage(new Error('x'))).toMatch(/Inténtalo de nuevo/);
  });
});
