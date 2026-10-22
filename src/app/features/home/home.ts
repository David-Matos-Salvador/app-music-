import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { errorMessage, fileUrl } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';
import { AlbumService } from '../../core/catalog/album.service';
import { Cover } from '../../shared/cover';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Cover],
  template: `
    <header class="page-header">
      <h1 class="page-title">Hola, {{ auth.user()?.name }}</h1>
    </header>

    <h2 class="section-title">Álbumes</h2>

    @if (albums.error()) {
      <p class="alert" role="alert">{{ errorMessage(albums.error()) }}</p>
    } @else if (albums.isLoading()) {
      <p class="muted">Cargando álbumes…</p>
    } @else {
      <ul class="cover-grid">
        @for (album of albums.value(); track album._id) {
          <li>
            <a class="cover-link" [routerLink]="['/albums', album._id]">
              <app-cover [src]="fileUrl('album', album.image)" [name]="album.title" />
              <span>
                <strong>{{ album.title }}</strong>
                <span>{{ album.artist.name }}, {{ album.year }}</span>
              </span>
            </a>
          </li>
        } @empty {
          <li class="empty">
            <p>Todavía no hay álbumes en el catálogo.</p>
            <a class="btn btn-ghost" routerLink="/artists">Ver artistas</a>
          </li>
        }
      </ul>
    }
  `,
  styles: `
    .section-title {
      font-size: var(--text-xl);
      margin-bottom: 1.5rem;
    }
    .empty {
      grid-column: 1 / -1;
    }
  `,
})
export default class Home {
  protected readonly auth = inject(AuthService);
  private readonly albumService = inject(AlbumService);

  protected readonly albums = rxResource({ stream: () => this.albumService.list() });
  protected readonly fileUrl = fileUrl;
  protected readonly errorMessage = errorMessage;
}
