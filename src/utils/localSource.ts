export const localSource = () => {
  let storage: Storage | undefined;
  if (typeof window !== 'undefined') storage = localStorage;

  const set = (key: string, value: string) => {
    storage?.setItem(key, value);
  };

  const get = (key: string) => storage?.getItem(key);

  const remove = (key: string) => {
    storage?.removeItem(key);
  };

  return { get, set, remove };
};
