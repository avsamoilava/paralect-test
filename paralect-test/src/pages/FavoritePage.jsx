import { useContext } from 'react';
import { VacanciesList } from '../components/VacanciesList/VacanciesList';
import Context from '../Context';

export const FavoritesPage = () => {
  const { favorites } = useContext(Context);
  return (
    <div className="">
      <h1>Favorites</h1>
      <VacanciesList vacancies={favorites} />
    </div>
  );
};
