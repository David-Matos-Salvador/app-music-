import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { errorMessage, fileUrl } from '../../core/api';
import { AlbumService } from '../../core/catalog/album.service';
import { Cover } from '../../shared/cover';
import { FilePicker } from '../../shared/file-picker';
import { Icon } from '../../shared/icon';

/** Crea un álbum para `:artistId` o edita el álbum `:id`. */
@Component({
  selector: 'app-album-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, Cover, FilePicker, Icon],
  template: `
    <a class="back-link" [routerLink]="backLink()">
      <app-icon name="chevron-left" [size]="16" /> Volver
    </a>
    <h1 class="page-title">{{ id() ? 'Editar álbum' : 'Nuevo álbum' }}</h1>

    <form class="form" [formGroup]="form" (ngSubmit)="save()" novalidate>
      @if (error()) {
        <p class="alert" role="alert">{{ error() }}</p>
      }
      <div class="form-row">
        <div class="field">
          <label for="title">Título</label>
          <input id="title" formControlName="title" />
          @if (form.controls.title.touched && form.controls.title.invalid) {
            <span class="field-error">Escribe el título del álbum.</span>
          }
        </div>
        <div class="field">
          <label for="year">Año</label>
          <input id="year" type="number" inputmode="numeric" formControlName="year" />
          @if (form.controls.year.touched && form.controls.year.invalid) {
            <span class="field-error">Escribe un año entre 1900 y 2100.</span>
          }
        </div>
      </div>
      <div class="field">
        <label for="description">Descripción</label>
        <textarea id="description" formControlName="description"></textarea>
      </div>
      <div class="field">
        <span class="label">Portada</span>
        <div class="image-row">
          @if (currentImage()) {
            <app-cover class="preview" [src]="currentImage()" [name]="form.controls.title.value" />
          }
          <app-file-picker accept="image/*" label="Elige una portada" [(file)]="image" />
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary" [disabled]="saving()">
          {{ saving() ? 'Guardando…' : id() ? 'Guardar cambios' : 'Crear álbum' }}
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
      --cover-font: 1.25rem;
    }
  `,
})
export default class AlbumForm implements OnInit {
  private readonly albumService = inject(AlbumService);
  private readonly router = inject(Router);

  readonly id = input<string>();
  readonly artistId = input<string>();

  protected readonly form = inject(NonNullableFormBuilder).group({
    title: ['', Validators.required],
    year: [
      new Date().getFullYear(),
      [Validators.required, Validators.min(1900), Validators.max(2100)],
    ],
    description: [''],
  });
  protected readonly image = signal<File | null>(null);
  protected readonly currentImage = signal<string | null>(null);
  protected readonly saving = signal(false);
  protected readonly error = signal<string | null>(null);
  private readonly loadedArtistId = signal<string | null>(null);

  protected backLink() {
    const id = this.id();
    return id ? ['/albums', id] : ['/artists', this.artistId() ?? this.loadedArtistId()];
  }

  ngOnInit() {
    const id = this.id();
    if (!id) return;
    this.albumService.get(id).subscribe({
      next: (album) => {
        this.form.patchValue(album);
        this.currentImage.set(fileUrl('album', album.image));
        this.loadedArtistId.set(album.artist._id);
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
    (id
      ? this.albumService.update(id, data)
      : this.albumService.create({ ...data, artist: this.artistId() ?? '' })
    )
      .pipe(
        switchMap((album) => (image ? this.albumService.uploadImage(album._id, image) : of(album))),
      )
      .subscribe({
        next: (album) => void this.router.navigate(['/albums', album._id]),
        error: (err: unknown) => {
          this.error.set(errorMessage(err));
          this.saving.set(false);
        },
      });
  }
}
