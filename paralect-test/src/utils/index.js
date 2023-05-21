export const createQueryStr = (params) => {
  return Object.entries(params)
    .filter((elem) => !!elem[1])
    .map((elem) => elem.join('='))
    .join('&');
};
export const setPaymentInfo = (from, to, currency) => {
  if (+from && +to) return `з/п ${from} - ${to} ${currency}`;
  if (from === to && +from && +to) return `з/п ${from} ${currency}`;
  if (!+from && +to) return `з/п до ${to} ${currency}`;
  if (+from && !+to) `з/п от ${from} ${currency}`;
  return '';
};
