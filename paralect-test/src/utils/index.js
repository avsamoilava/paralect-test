export const createQueryStr = (params) => {
  return Object.entries(params)
    .filter((elem) => !!elem[1])
    .map((elem) => elem.join('='))
    .join('&');
};
export const setPaymentInfo = (from, to, currency) => {
  if (+from && +to) return `зп ${from} - ${to} ${currency}`;
  if (from === to && +from && +to) return `зп ${from} ${currency}`;
  if (!+from && +to) return `зп до ${to} ${currency}`;
  if (+from && !+to) `зп от ${from} ${currency}`;
  return '';
};
