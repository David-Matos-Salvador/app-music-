import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { errorMessage, fileUrl } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';
import { AlbumService } from '../../core/catalog/album.service';
import { ArtistService } from '../../core/catalog/artist.service';
import { ConfirmDelete } from '../../shared/confirm-delete';
import { Cover } from '../../shared/cover';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-artist-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Cover, Icon, ConfirmDelete],
  templateUrl: './artist-detail.html',
  styles: `
    .round {
      --cover-radius: 50%;
    }
    .albums-title {
      font-size: var(--text-xl);
      margin-bottom: 1.5rem;
    }
  `,
})
export default class ArtistDetail {
  protected readonly auth = inject(AuthService);
  private readonly artistService = inject(ArtistService);
  private readonly albumService = inject(AlbumService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  protected readonly artist = rxResource({
    params: () => this.id(),
    stream: ({ params }) => this.artistService.get(params),
  });

  protected readonly albums = rxResource({
    params: () => this.id(),
    stream: ({ params }) => this.albumService.list(params),
  });

  protected readonly fileUrl = fileUrl;
  protected readonly errorMessage = errorMessage;

  protected deleteArtist() {
    this.artistService.delete(this.id()).subscribe({
      next: () => void this.router.navigate(['/artists']),
      error: (err: unknown) => alert(errorMessage(err)),
    });
  }
}
