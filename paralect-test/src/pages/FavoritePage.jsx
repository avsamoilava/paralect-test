import { useContext } from 'react';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import Context from '../Context';
import { Box } from '@mantine/core';

export const FavoritesPage = () => {
  const { favorites } = useContext(Context);
  return (
    <Box maw={1138} p={'40px 10px'} m={'0 auto'}>
      <VacanciesList vacancies={favorites} />
    </Box>
  );
};
