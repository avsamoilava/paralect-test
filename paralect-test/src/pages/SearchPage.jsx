import React, { useContext, useEffect, useState } from 'react';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';
import Context from '../Context';
import { createQueryStr } from '../utils';
import { SearchInput } from '../components/SearchInput/SearchInput';

export const SearchPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { queryParams } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getVacancies(token, createQueryStr(queryParams));
      setVacancies(data.objects);
      setIsLoading(false);
    };
    fetchData();
  }, [queryParams]);

  return (
    <div className="">
      <h1>Search Page</h1>
      <Filter />
      <SearchInput />
      {isLoading ? <Loader /> : <VacanciesList vacancies={vacancies} />}
    </div>
  );
};
