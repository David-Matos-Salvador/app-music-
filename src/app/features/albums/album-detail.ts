import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { errorMessage, fileUrl } from '../../core/api';
import { AuthService } from '../../core/auth/auth.service';
import { AlbumService } from '../../core/catalog/album.service';
import { SongService } from '../../core/catalog/song.service';
import { Song } from '../../core/models';
import { PlayerService } from '../../core/player/player.service';
import { ConfirmDelete } from '../../shared/confirm-delete';
import { Cover } from '../../shared/cover';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-album-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Cover, Icon, ConfirmDelete],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export default class AlbumDetail {
  protected readonly auth = inject(AuthService);
  protected readonly player = inject(PlayerService);
  private readonly albumService = inject(AlbumService);
  private readonly songService = inject(SongService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  protected readonly album = rxResource({
    params: () => this.id(),
    stream: ({ params }) => this.albumService.get(params),
  });

  protected readonly songs = rxResource({
    params: () => this.id(),
    stream: ({ params }) => this.songService.listByAlbum(params),
  });

  protected readonly playable = computed(() =>
    (this.songs.value() ?? []).filter((song) => fileUrl('song', song.file)),
  );

  protected readonly fileUrl = fileUrl;
  protected readonly errorMessage = errorMessage;

  protected play(song: Song) {
    if (this.player.isCurrent(song)) this.player.toggle();
    else this.player.play(song, this.playable());
  }

  protected playAll() {
    const [first] = this.playable();
    if (first) this.player.play(first, this.playable());
  }

  protected deleteAlbum(artistId: string) {
    this.albumService.delete(this.id()).subscribe({
      next: () => void this.router.navigate(['/artists', artistId]),
      error: (err: unknown) => alert(errorMessage(err)),
    });
  }

  protected deleteSong(song: Song) {
    this.songService.delete(song._id).subscribe({
      next: () => this.songs.reload(),
      error: (err: unknown) => alert(errorMessage(err)),
    });
  }
}
