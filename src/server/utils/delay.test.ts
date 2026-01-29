import { delay } from './delay';

describe('delay', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('resolves after given delay', async () => {
    const promise = delay(1000);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    jest.advanceTimersByTime(1000);

    await Promise.resolve();

    expect(resolved).toBe(true);
  });
});
