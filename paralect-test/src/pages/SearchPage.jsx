import React, { useEffect, useState } from 'react';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';

export const SearchPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getVacancies(token);
      setVacancies(data.objects);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <h1>Search Page</h1>
      <Filter />
      {isLoading ? <Loader /> : <VacanciesList vacancies={vacancies} />}
    </div>
  );
};
