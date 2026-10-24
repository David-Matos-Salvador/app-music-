import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('formatea segundos como m:ss', () => {
    expect(pipe.transform(75.9)).toBe('1:15');
    expect(pipe.transform(5)).toBe('0:05');
  });

  it('devuelve 0:00 para valores vacíos o no finitos', () => {
    expect(pipe.transform(null)).toBe('0:00');
    expect(pipe.transform(Number.NaN)).toBe('0:00');
  });
});
