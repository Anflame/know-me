export const createToken = (user: string, email: string, refresh?: boolean) => {
  let payload = `${user}:${email}:${Date.now()}`;
  if (refresh) payload += ':refresh';
  return btoa(payload);
};
