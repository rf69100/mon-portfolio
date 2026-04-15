import { PROJECT_BASE_URL } from '../config/env';

const EXTERNAL_OR_SPECIAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:', '#'];
const INTERNAL_ABSOLUTE_PATHS = ['/coming-soon'];

export const buildProjectUrl = (path) => {
  if (!path) return null;
  if (EXTERNAL_OR_SPECIAL_PREFIXES.some((p) => path.startsWith(p))) return path;
  if (INTERNAL_ABSOLUTE_PATHS.some((p) => path === p || path.startsWith(`${p}/`))) return path;
  return `${PROJECT_BASE_URL}${path}`;
};

export const isInternalRoute = (path) =>
  Boolean(path) && INTERNAL_ABSOLUTE_PATHS.some((p) => path === p || path.startsWith(`${p}/`));
