import { Vacancy } from '../Vacancy/Vacancy';
import cl from './VacanciesList.module.scss';

export const VacanciesList = ({ vacancies }) => {
  return (
    <div className={cl['vacancies']}>
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};
