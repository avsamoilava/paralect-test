import { useContext, useEffect } from 'react';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import Context from '../context';
import { Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const FavoritesPage = () => {
  const { favorites } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    !favorites.length && navigate('/empty');
  }, [favorites]);

  return (
    <Box maw={1138} p={'40px 10px'} m={'0 auto'}>
      <VacanciesList vacancies={favorites} />
    </Box>
  );
};
