export function withBase(path = '') {
  const configuredBase = import.meta.env.BASE_URL;
  const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${base}${cleanPath}` : base;
}
