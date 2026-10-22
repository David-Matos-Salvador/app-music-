import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fileUrl } from '../core/api';
import { PlayerService } from '../core/player/player.service';
import { Cover } from '../shared/cover';
import { DurationPipe } from '../shared/duration.pipe';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-player-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Cover, Icon, DurationPipe],
  templateUrl: './player-bar.html',
  styleUrl: './player-bar.css',
})
export class PlayerBar {
  protected readonly player = inject(PlayerService);
  protected readonly song = this.player.current;
  protected readonly cover = computed(() => fileUrl('album', this.song()?.album.image));

  protected seek(event: Event) {
    this.player.seek(Number((event.target as HTMLInputElement).value));
  }
}
