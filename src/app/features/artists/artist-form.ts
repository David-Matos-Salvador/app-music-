import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { errorMessage, fileUrl } from '../../core/api';
import { ArtistService } from '../../core/catalog/artist.service';
import { Cover } from '../../shared/cover';
import { FilePicker } from '../../shared/file-picker';
import { Icon } from '../../shared/icon';

/** Crea un artista o, si la ruta trae `:id`, lo edita. */
@Component({
  selector: 'app-artist-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, Cover, FilePicker, Icon],
  template: `
    <a class="back-link" [routerLink]="id() ? ['/artists', id()] : '/artists'">
      <app-icon name="chevron-left" [size]="16" /> Volver
    </a>
    <h1 class="page-title">{{ id() ? 'Editar artista' : 'Nuevo artista' }}</h1>

    <form class="form" [formGroup]="form" (ngSubmit)="save()" novalidate>
      @if (error()) {
        <p class="alert" role="alert">{{ error() }}</p>
      }
      <div class="field">
        <label for="name">Nombre</label>
        <input id="name" formControlName="name" />
        @if (form.controls.name.touched && form.controls.name.invalid) {
          <span class="field-error">Escribe el nombre del artista.</span>
        }
      </div>
      <div class="field">
        <label for="description">Descripción</label>
        <textarea id="description" formControlName="description"></textarea>
      </div>
      <div class="field">
        <span class="label">Imagen</span>
        <div class="image-row">
          @if (currentImage()) {
            <app-cover class="preview" [src]="currentImage()" [name]="form.controls.name.value" />
          }
          <app-file-picker accept="image/*" label="Elige una imagen" [(file)]="image" />
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" [disabled]="saving()">
          {{ saving() ? 'Guardando…' : id() ? 'Guardar cambios' : 'Crear artista' }}
        </button>
      </div>
    </form>
  `,
  styles: `
    .page-title {
      margin-bottom: 2rem;
    }
    .label {
      font-size: var(--text-sm);
      font-weight: 600;
      color: var(--text-muted);
    }
    .image-row {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 1rem;
    }
    .preview {
      width: 4.5rem;
      --cover-radius: 50%;
      --cover-font: 1.25rem;
    }
  `,
})
export default class ArtistForm implements OnInit {
  private readonly artistService = inject(ArtistService);
  private readonly router = inject(Router);

  readonly id = input<string>();

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    description: [''],
  });
  protected readonly image = signal<File | null>(null);
  protected readonly currentImage = signal<string | null>(null);
  protected readonly saving = signal(false);
  protected readonly error = signal<string | null>(null);

  ngOnInit() {
    const id = this.id();
    if (!id) return;
    this.artistService.get(id).subscribe({
      next: (artist) => {
        this.form.patchValue(artist);
        this.currentImage.set(fileUrl('artist', artist.image));
      },
      error: (err: unknown) => this.error.set(errorMessage(err)),
    });
  }

  protected save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const id = this.id();
    const data = this.form.getRawValue();
    const image = this.image();

    this.saving.set(true);
    this.error.set(null);
    (id ? this.artistService.update(id, data) : this.artistService.create(data))
      .pipe(
        switchMap((artist) =>
          image ? this.artistService.uploadImage(artist._id, image) : of(artist),
        ),
      )
      .subscribe({
        next: (artist) => void this.router.navigate(['/artists', artist._id]),
        error: (err: unknown) => {
          this.error.set(errorMessage(err));
          this.saving.set(false);
        },
      });
  }
}
