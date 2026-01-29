import { isEmptyObject } from '@/utils/object';

describe('object util test', () => {
  it('should be filled object', () => {
    const obj = {
      a: 1,
    };

    expect(isEmptyObject(obj)).toBe(false);
  });
  it('should be empty object', () => {
    const obj = {};

    expect(isEmptyObject(obj)).toBe(true);
  });
});
