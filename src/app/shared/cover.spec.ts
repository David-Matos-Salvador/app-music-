import { TestBed } from '@angular/core/testing';
import { Cover } from './cover';

describe('Cover', () => {
  it('muestra las iniciales cuando no hay imagen', async () => {
    const fixture = TestBed.createComponent(Cover);
    fixture.componentRef.setInput('name', 'Soda Stereo');
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('img')).toBeNull();
    expect(el.textContent?.trim()).toBe('SS');
  });

  it('muestra la imagen si la hay', async () => {
    const fixture = TestBed.createComponent(Cover);
    fixture.componentRef.setInput('name', 'Bocanada');
    fixture.componentRef.setInput('src', 'https://example.com/a.jpg');
    await fixture.whenStable();
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.getAttribute('src')).toBe('https://example.com/a.jpg');
    expect(img?.getAttribute('alt')).toBe('Bocanada');
  });
});
