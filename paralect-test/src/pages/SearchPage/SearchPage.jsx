import { useContext, useEffect, useState } from 'react';
import { VacanciesAPI } from '../../api/VacanciesAPI';
import { VacanciesList } from '../../components/VacanciesList/VacanciesList';
import { Loader } from '../../components/Loader/Loader';
import { Filter } from '../../components/Filter/Filter';
import Context from '../../Context';
import { createQueryStr } from '../../utils';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { PaginationBlock } from '../../components/PaginationBlock/Pagination';
import cl from './SaerchPage.module.scss';
import { Flex, Box } from '@mantine/core';

export const SearchPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(Infinity);

  const { queryParams } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      setIsLoading(true);
      const data = await VacanciesAPI.getVacancies(token, createQueryStr(queryParams));
      setVacancies(data.objects);
      setTotal(data.total);
      setIsLoading(false);
    };
    fetchData();
  }, [queryParams]);

  return (
    <Flex gap={28} maw={1138} p="40px 10px" className={cl['search-page']} m={'0 auto'}>
      <Filter className={cl['filters']} />
      <Box className={cl['list']}>
        <SearchInput className={cl['seacrh']} />
        <div className={cl['vacancies']}>
          {isLoading ? <Loader /> : <VacanciesList vacancies={vacancies} />}
          <PaginationBlock total={total} className={cl['pagination']} />
        </div>
      </Box>
    </Flex>
  );
};
