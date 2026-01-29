/**
 * @jest-environment node
 */

import { localSource } from './localSource';

describe('localSource (SSR / no window)', () => {
  it('does not throw and returns undefined for get()', () => {
    const { get, set, remove } = localSource();

    expect(() => set('key', '9c27b0')).not.toThrow();
    expect(() => remove('key')).not.toThrow();
    expect(get('key')).toBeUndefined();
  });
});
