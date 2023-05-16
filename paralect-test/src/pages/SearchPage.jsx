import { useEffect, useState } from 'react';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';

export const SearchPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await VacanciesAPI.getVacancies();
      setVacancies(data.objects);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <h1>Search Page</h1>
      <VacanciesList vacancies={vacancies} />
    </div>
  );
};
