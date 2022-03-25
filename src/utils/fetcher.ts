import { toSnakeCase } from '@/utils/case-converter';

export default async function fetcher(url: string, options?: RequestInit) {
  const newOptions = { ...options };
  newOptions.headers = {
    ...newOptions?.headers,
    mode: 'cors',
    Authorization: process.env.VUE_APP_OPEN_API_KEY,
  };
  return fetch(url, newOptions)
    .then((res) => res.json())
    .catch((error) => error);
}

export function formatQueries(queries: { [key: string]: string | number | undefined; }) {
  return Object
    .entries(queries)
    .reduce((result, [key, value], i) => `${result}${i ? '&' : '?'}${toSnakeCase(key)}=${value}`, '');
}
