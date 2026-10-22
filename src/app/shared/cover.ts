import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

/**
 * Imagen de artista/álbum/usuario. Si no hay imagen (o falla al cargar) muestra las iniciales
 * sobre un color estable derivado del nombre, para que cada elemento sea reconocible.
 */
@Component({
  selector: 'app-cover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[style.--hue]': 'hue()' },
  template: `
    @if (src() && !failed()) {
      <img [src]="src()" [alt]="name()" loading="lazy" (error)="failed.set(true)" />
    } @else {
      <span class="initials" aria-hidden="true">{{ initials() }}</span>
    }
  `,
  styles: `
    :host {
      display: block;
      aspect-ratio: 1;
      overflow: hidden;
      container-type: inline-size;
      border-radius: var(--cover-radius, var(--radius-sm));
      background: linear-gradient(
        150deg,
        oklch(0.42 0.12 var(--hue)),
        oklch(0.24 0.08 calc(var(--hue) + 40))
      );
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .initials {
      display: grid;
      place-items: center;
      height: 100%;
      font-size: var(--cover-font, clamp(1.25rem, 30cqi, 4rem));
      font-weight: 700;
      letter-spacing: -0.04em;
      color: oklch(0.92 0.04 var(--hue));
    }
  `,
})
export class Cover {
  readonly src = input<string | null>(null);
  readonly name = input('');
  protected readonly failed = signal(false);

  protected readonly initials = computed(() =>
    this.name()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join(''),
  );

  protected readonly hue = computed(() => {
    let hash = 0;
    for (const char of this.name()) hash = (hash * 31 + char.charCodeAt(0)) % 360;
    return hash;
  });
}
