import { Navigate } from 'react-router-dom';
import { Vacancy } from '../Vacancy/Vacancy';
import cl from './VacanciesList.module.css';

export const VacanciesList = ({ vacancies }) => {
  return (
    <div className={cl['vacancies']}>
      {vacancies?.length ? (
        vacancies.map((vacancy) => <Vacancy key={vacancy.id} vacancy={vacancy} />)
      ) : (
        <Navigate to="/empty" />
      )}
    </div>
  );
};
