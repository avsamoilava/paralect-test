export const createQueryStr = (params) => {
  return Object.entries(params)
    .map((elem) => elem.join('='))
    .join('&');
};
