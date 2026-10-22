import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { API_URL } from '../api';
import { User } from '../models';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

const user: User = {
  _id: 'u1',
  name: 'Ada',
  surname: 'Lovelace',
  email: 'ada@example.com',
  role: 'ROLE_ADMIN',
  image: null,
};

describe('AuthService', () => {
  let auth: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    auth = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  function login() {
    auth.login({ email: user.email, password: 'secreto' }).subscribe();
    http.expectOne(`${API_URL}/login`).flush({ user, token: 'tok' });
  }

  it('guarda la sesión al iniciar sesión', () => {
    login();
    expect(auth.isLoggedIn()).toBe(true);
    expect(auth.isAdmin()).toBe(true);
    expect(JSON.parse(localStorage.getItem('app-music.session')!).token).toBe('tok');
  });

  it('añade el token a las peticiones a la API', () => {
    login();
    TestBed.inject(HttpClient).get(`${API_URL}/artists/1`).subscribe();
    const req = http.expectOne(`${API_URL}/artists/1`);
    expect(req.request.headers.get('Authorization')).toBe('Bearer tok');
    req.flush({});
  });

  it('no envía el token a otros dominios', () => {
    login();
    TestBed.inject(HttpClient).get('https://example.com/x').subscribe();
    const req = http.expectOne('https://example.com/x');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('cierra la sesión si la API responde 401', () => {
    login();
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
    TestBed.inject(HttpClient)
      .get(`${API_URL}/me`)
      .subscribe({ error: () => undefined });
    http
      .expectOne(`${API_URL}/me`)
      .flush({ message: 'Token no válido' }, { status: 401, statusText: 'Unauthorized' });
    expect(auth.isLoggedIn()).toBe(false);
    expect(navigate).toHaveBeenCalledWith(['/login']);
  });

  it('actualiza el usuario guardado al editar el perfil', () => {
    login();
    auth.updateProfile({ name: 'Augusta', surname: user.surname, email: user.email }).subscribe();
    http.expectOne(`${API_URL}/update-user/u1`).flush({ user: { ...user, name: 'Augusta' } });
    expect(auth.user()?.name).toBe('Augusta');
    expect(auth.token()).toBe('tok');
  });
});
