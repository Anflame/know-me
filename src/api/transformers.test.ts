import getTransformers from '@/api/transformers';
import { AxiosStatic } from 'axios';

describe('transformers', () => {
  it('should return similar value', () => {
    const result = getTransformers({} as AxiosStatic);

    const functionArray = result.every((item) => typeof item === 'function');
    expect(functionArray).toBe(true);

    const first = result[0] as <T>(x: T) => T;
    const last = result[result.length - 1] as <T>(response: { data: T } | T) => T;

    expect(first(123)).toBe(123);

    expect(last({ data: 123 })).toBe(123);
    expect(last(123)).toBe(123);
  });
});
