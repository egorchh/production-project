// eslint-disable-next-line max-len
export const useSearchParams = (param: string) => new URLSearchParams(window.location.search).get(param);
