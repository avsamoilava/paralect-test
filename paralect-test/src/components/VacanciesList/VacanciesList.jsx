import React, { useEffect } from 'react';
import { Vacancy } from '../Vacancy/Vacancy';
import cl from './VacanciesList.module.css';

export const VacanciesList = ({ vacancies }) => {
  return (
    <div className={cl['vacancies']}>
      {vacancies.length &&
        vacancies.map((vacancy) => <Vacancy key={vacancy.id} vacancy={vacancy} />)}
    </div>
  );
};
