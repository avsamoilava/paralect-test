import { useEffect, useState, useContext } from 'react';
import cl from './Vacancy.module.css';
import { Link } from 'react-router-dom';
import { Star, StarFilled } from '../icons';
import Context from '../../Context';

export const Vacancy = ({ vacancy }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, saveFavorites } = useContext(Context);

  const { profession, firm_name, town, type_of_work, payment_to, payment_from, currency, id } =
    vacancy;

  useEffect(() => {
    favorites?.find((elem) => elem.id === id) && setIsFavorite(true);
  }, [id]);

  const clickHandler = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      favorites.push({
        id,
        profession,
        firm_name,
        town,
        type_of_work,
        payment_to,
        payment_from,
        currency,
      });
      saveFavorites(favorites);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    if (isFavorite) {
      const newFavorites = favorites?.filter((elem) => elem.id != id);
      saveFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  return (
    <div className={cl['vacancy']}>
      <button onClick={clickHandler} className={cl['star-btn']}>
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
      <Link to={`/${id}`}>
        <h3 className={cl['profession']}>{profession}</h3>
        <div className={cl['firm']}>{firm_name}</div>
        <div className={cl['payment']}>{payment_from}</div>
        <div className={cl['type-work']}>{type_of_work.title}</div>
        <div className={cl['town']}>{town?.title}</div>
      </Link>
    </div>
  );
};
