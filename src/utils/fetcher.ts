export default function fetcher(url: string, options?: RequestInit) {
  const newOptions = { ...options };
  newOptions.headers = {
    ...newOptions?.headers,
    Authorization: process.env.VUE_APP_OPEN_API_KEY,
  };
  return fetch(url, newOptions)
    .then((res) => res.json())
    .catch((error) => error);
}
