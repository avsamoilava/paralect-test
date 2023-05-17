export const createQueryStr = (params) => {
  return Object.entries(params)
    .filter((elem) => !!elem[1])
    .map((elem) => elem.join('='))
    .join('&');
};
