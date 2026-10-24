import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { fileUrl } from '../core/api';
import { AuthService } from '../core/auth/auth.service';
import { Cover } from '../shared/cover';
import { Icon } from '../shared/icon';
import { PlayerBar } from './player-bar';

/** Estructura de la app autenticada: navegación, contenido y reproductor. */
@Component({
  selector: 'app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icon, Cover, PlayerBar],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export default class Shell {
  protected readonly auth = inject(AuthService);
  protected readonly avatar = computed(() => fileUrl('user', this.auth.user()?.image));
  protected readonly fullName = computed(() => {
    const user = this.auth.user();
    return user ? `${user.name} ${user.surname}` : '';
  });
}
