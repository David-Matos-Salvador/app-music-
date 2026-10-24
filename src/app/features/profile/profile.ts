import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { of, switchMap } from 'rxjs';
import { errorMessage, fileUrl } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';
import { Cover } from '../../shared/cover';
import { FilePicker } from '../../shared/file-picker';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Cover, FilePicker],
  template: `
    <h1 class="page-title">Mi perfil</h1>

    <form class="form" [formGroup]="form" (ngSubmit)="save()" novalidate>
      @if (status(); as status) {
        <p class="alert" [class.alert-success]="status.ok" role="status">{{ status.message }}</p>
      }

      <div class="avatar-row">
        <app-cover class="avatar" [src]="avatar()" [name]="fullName()" />
        <app-file-picker accept="image/*" label="Cambiar foto" [(file)]="image" />
      </div>

      <div class="form-row">
        <div class="field">
          <label for="name">Nombre</label>
          <input id="name" formControlName="name" autocomplete="given-name" />
          @if (form.controls.name.touched && form.controls.name.invalid) {
            <span class="field-error">Escribe tu nombre.</span>
          }
        </div>
        <div class="field">
          <label for="surname">Apellidos</label>
          <input id="surname" formControlName="surname" autocomplete="family-name" />
          @if (form.controls.surname.touched && form.controls.surname.invalid) {
            <span class="field-error">Escribe tus apellidos.</span>
          }
        </div>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" autocomplete="email" />
        @if (form.controls.email.touched && form.controls.email.invalid) {
          <span class="field-error">Escribe un email válido.</span>
        }
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" [disabled]="saving()">
          {{ saving() ? 'Guardando…' : 'Guardar cambios' }}
        </button>
        <button type="button" class="btn btn-ghost" (click)="auth.logout()">Cerrar sesión</button>
      </div>
    </form>
  `,
  styles: `
    .page-title {
      margin-bottom: 2rem;
    }
    .avatar-row {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 1.25rem;
    }
    .avatar {
      width: 6rem;
      --cover-radius: 50%;
      --cover-font: 2rem;
    }
  `,
})
export default class Profile {
  protected readonly auth = inject(AuthService);
  private readonly user = this.auth.user;

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: [this.user()?.name ?? '', Validators.required],
    surname: [this.user()?.surname ?? '', Validators.required],
    email: [this.user()?.email ?? '', [Validators.required, Validators.email]],
  });
  protected readonly image = signal<File | null>(null);
  protected readonly saving = signal(false);
  protected readonly status = signal<{ ok: boolean; message: string } | null>(null);

  protected readonly avatar = computed(() => fileUrl('user', this.user()?.image));
  protected readonly fullName = computed(() => `${this.user()?.name} ${this.user()?.surname}`);

  protected save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const image = this.image();

    this.saving.set(true);
    this.status.set(null);
    this.auth
      .updateProfile(this.form.getRawValue())
      .pipe(switchMap((user) => (image ? this.auth.uploadAvatar(image) : of(user))))
      .subscribe({
        next: () => {
          this.image.set(null);
          this.status.set({ ok: true, message: 'Cambios guardados.' });
          this.saving.set(false);
        },
        error: (err: unknown) => {
          this.status.set({ ok: false, message: errorMessage(err) });
          this.saving.set(false);
        },
      });
  }
}
