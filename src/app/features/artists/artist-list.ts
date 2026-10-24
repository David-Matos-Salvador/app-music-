import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { errorMessage, fileUrl } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';
import { ArtistService } from '../../core/catalog/artist.service';
import { Cover } from '../../shared/cover';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-artist-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Cover, Icon],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.css',
})
export default class ArtistList {
  protected readonly auth = inject(AuthService);
  private readonly artistService = inject(ArtistService);

  /** Query param `?page=N`, enlazado gracias a withComponentInputBinding(). */
  readonly page = input<string>();
  protected readonly currentPage = computed(() => Math.max(Number(this.page()) || 1, 1));

  protected readonly artists = rxResource({
    params: () => this.currentPage(),
    stream: ({ params }) => this.artistService.getPage(params),
  });

  protected readonly fileUrl = fileUrl;
  protected readonly errorMessage = errorMessage;
}
