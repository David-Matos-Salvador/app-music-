import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { errorMessage } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';

type Mode = 'login' | 'register';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly mode = signal<Mode>('login');
  protected readonly error = signal<string | null>(null);
  protected readonly pending = signal(false);

  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  protected readonly registerForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected switchTo(mode: Mode) {
    this.mode.set(mode);
    this.error.set(null);
  }

  protected login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.submit(this.auth.login(this.loginForm.getRawValue()));
  }

  /** Tras registrarse se inicia sesión directamente: no hace falta volver a escribir los datos. */
  protected register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const data = this.registerForm.getRawValue();
    this.submit(
      this.auth
        .register(data)
        .pipe(switchMap(() => this.auth.login({ email: data.email, password: data.password }))),
    );
  }

  private submit(request: ReturnType<AuthService['login']>) {
    this.pending.set(true);
    this.error.set(null);
    request.subscribe({
      next: () => void this.router.navigate(['/']),
      error: (err: unknown) => {
        this.error.set(errorMessage(err));
        this.pending.set(false);
      },
    });
  }
}
