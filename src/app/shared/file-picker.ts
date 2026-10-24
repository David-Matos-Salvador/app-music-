import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { Icon } from './icon';

@Component({
  selector: 'app-file-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <label class="picker">
      <input type="file" [accept]="accept()" (change)="onChange($event)" />
      <app-icon name="upload" [size]="18" />
      <span>{{ file()?.name ?? label() }}</span>
    </label>
  `,
  styles: `
    .picker {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 1rem;
      border: 1.5px dashed var(--line-strong);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      cursor: pointer;
      transition:
        border-color 0.15s,
        color 0.15s;
    }
    .picker:hover,
    .picker:focus-within {
      border-color: var(--accent);
      color: var(--text);
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
    }
  `,
})
export class FilePicker {
  readonly accept = input('image/*');
  readonly label = input('Elige un fichero');
  readonly file = model<File | null>(null);

  protected onChange(event: Event) {
    this.file.set((event.target as HTMLInputElement).files?.[0] ?? null);
  }
}
