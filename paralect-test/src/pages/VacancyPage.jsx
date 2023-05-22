import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { Loader } from '../components/Loader/Loader';
import { Box } from '@mantine/core';
import { VacancyFull } from '../components/VacancyFull/VacancyFull';
import Context from '../context';

export const VacancyPage = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(Context);

  useEffect(() => {
    const fetchVacancy = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getOneVacancy(id, token);
      setVacancy(data);
      setIsLoading(false);
    };
    token && fetchVacancy();
  }, [id, token]);

  return <Box pt={40}>{!token || isLoading ? <Loader /> : <VacancyFull vacancy={vacancy} />}</Box>;
};
