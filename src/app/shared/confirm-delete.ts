import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { Icon } from './icon';

/** Botón de borrado en dos pasos: evita borrar por un clic accidental. */
@Component({
  selector: 'app-confirm-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    @if (asking()) {
      <span class="ask" role="group" [attr.aria-label]="question()">
        <span>{{ question() }}</span>
        <button type="button" class="btn btn-danger btn-sm" (click)="confirm()">Borrar</button>
        <button type="button" class="btn btn-ghost btn-sm" (click)="asking.set(false)">
          Cancelar
        </button>
      </span>
    } @else {
      <button
        type="button"
        class="btn btn-ghost btn-sm"
        [attr.aria-label]="'Borrar ' + itemName()"
        (click)="asking.set(true)"
      >
        <app-icon name="trash" [size]="16" />
        @if (!compact()) {
          Borrar
        }
      </button>
    }
  `,
  styles: `
    .ask {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      font-size: var(--text-sm);
    }
  `,
})
export class ConfirmDelete {
  readonly itemName = input.required<string>();
  readonly question = input('¿Seguro?');
  /** Solo el icono, para listas densas. */
  readonly compact = input(false, { transform: booleanAttribute });
  readonly confirmed = output();
  protected readonly asking = signal(false);

  protected confirm() {
    this.asking.set(false);
    this.confirmed.emit();
  }
}
