import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { API_URL } from '../api';
import { AuthService } from './auth.service';

/** Añade el token a las peticiones a la API y cierra la sesión si el servidor lo rechaza. */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  const isApiRequest = req.url.startsWith(API_URL);

  const request =
    token && isApiRequest ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(request).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && token && isApiRequest) {
        auth.logout();
      }
      return throwError(() => error);
    }),
  );
};
