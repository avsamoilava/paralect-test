import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VacanciesAPI } from '../api/VacanciesAPI';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';
import Context from '../context';
import { createQueryStr } from '../utils';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { PaginationBlock } from '../components/PaginationBlock/Pagination';
import { Flex, Box } from '@mantine/core';

export const SearchPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(Infinity);
  const { queryParams } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getVacancies(token, createQueryStr(queryParams));
      data.objects.length ? setVacancies(data.objects) : navigate('/empty');
      setVacancies(data.objects);
      setTotal(data.total);
      setIsLoading(false);
    };
    fetchData();
  }, [queryParams]);

  return (
    <Flex gap={28} maw={1138} p={'40px 10px'} m={'0 auto'}>
      <Filter />
      <Box style={{ flexGrow: 1 }}>
        <SearchInput />
        <div>
          {isLoading ? <Loader /> : <VacanciesList vacancies={vacancies} />}
          <PaginationBlock total={total} />
        </div>
      </Box>
    </Flex>
  );
};
