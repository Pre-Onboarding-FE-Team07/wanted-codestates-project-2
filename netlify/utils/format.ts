import { toSnakeCase } from '@/netlify/utils/case-converter';

export function formatQueries(queries?: { [key: string]: string | number | undefined; }) {
  if (!queries) return '';
  return Object
    .entries(queries)
    .reduce((result, [key, value], i) => `${result}${i ? '&' : '?'}${toSnakeCase(key)}=${value}`, '');
}
