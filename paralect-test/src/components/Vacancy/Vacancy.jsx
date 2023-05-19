import React, { useEffect, useState } from 'react';
import cl from './Vacancy.module.css';
import { Link } from 'react-router-dom';
import { Star, StarFilled } from '../icons';

export const Vacancy = ({ vacancy }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { profession, firm_name, town, type_of_work, payment_to, payment_from, currency, id } =
    vacancy;

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites?.find((elem) => elem.id === id) && setIsFavorite(true);
  }, [id]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    if (isFavorite) {
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
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    if (!isFavorite) {
      localStorage.setItem('favorites', JSON.stringify(favorites?.filter((elem) => elem.id != id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <div className={cl['vacancy']}>
      <button onClick={() => setIsFavorite(!isFavorite)} className={cl['star-btn']}>
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
