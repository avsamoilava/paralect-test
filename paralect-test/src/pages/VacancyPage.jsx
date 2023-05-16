import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Vacancy } from '../components/Vacancy/Vacancy';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { Description } from '../components/Description/Description';

export const VacancyPage = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  const [vacancy, setVacancy] = useState({});

  useEffect(() => {
    const fetchVacancy = async () => {
      const data = await VacanciesAPI.getOneVacancy(id);
      setVacancy(data);
    };
    fetchVacancy();
  }, [id]);

  return (
    <div className="">
      <h1>Vacancy</h1>
      {Object.keys(vacancy).length && <Vacancy vacancy={vacancy} />}
      {Object.keys(vacancy).length && <Description vacancy={vacancy} />}
    </div>
  );
};
