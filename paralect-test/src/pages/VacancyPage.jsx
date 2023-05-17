import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { Loader } from '../components/Loader/Loader';
import { VacancyFull } from '../components/VacancyFull/VacancyFull';

export const VacancyPage = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchVacancy = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getOneVacancy(id);
      setVacancy(data);
      setIsLoading(false);
    };
    fetchVacancy();
  }, [id]);

  return (
    <div className="">
      <h1>Vacancy</h1>
      {isLoading ? <Loader /> : <VacancyFull vacancy={vacancy} />}
    </div>
  );
};
