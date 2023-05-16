import React, { useEffect } from 'react';
import cl from './Vacancy.module.css';

export const Vacancy = (props) => {
  const {
    profession,
    firm_name: firmName,
    town,
    type_of_work: typeOfWork,
    payment_to: paymentTo,
    payment_from: paymentFrom,
    currency,
  } = props.vacancy;
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={cl['vacancy']}>
      <h3 className={cl['profession']}>{profession}</h3>
      <div className={cl['firm']}>{firmName}</div>
      <div className={cl['payment']}>{paymentFrom}</div>
      <div className={cl['type-work']}>{typeOfWork.title}</div>
      <div className={cl['town']}>{town.title}</div>
    </div>
  );
};
