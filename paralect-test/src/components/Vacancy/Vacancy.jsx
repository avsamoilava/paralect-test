import { useEffect, useState, useContext } from 'react';
import cl from './Vacancy.module.scss';
import { Link } from 'react-router-dom';
import { Star, StarFilled } from '../icons';
import Context from '../../Context';
import { Flex, Text, Title } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { setPaymentInfo } from '../../utils';

export const Vacancy = ({ vacancy }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, saveFavorites } = useContext(Context);

  const { profession, firm_name, town, type_of_work, payment_to, payment_from, currency, id } =
    vacancy;

  useEffect(() => {
    favorites?.find((elem) => elem.id === id) && setIsFavorite(true);
  }, [favorites, id]);

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
    <Flex className={cl['vacancy']} justify={'space-between'} p={24} gap={40}>
      <Link to={`/${id}`}>
        <Flex direction={'column'} gap={12}>
          <Title order={3} color={'#5E96FC'} fz={20} lh={'24px'}>
            {profession}
          </Title>
          <Flex gap={12} align={'center'} color={''}>
            <Text fw={600}>{setPaymentInfo(payment_from, payment_to, currency)}</Text>
            <Text fw={600} color={'#ACADB9'}>
              •
            </Text>
            <Text>{type_of_work.title}</Text>
          </Flex>
          <Flex gap={8} align={'center'}>
            <IconMapPin size={20} color="#ACADB9" />
            <Text>{town?.title}</Text>
          </Flex>
        </Flex>
      </Link>
      <button onClick={clickHandler} className={cl['star-btn']}>
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </Flex>
  );
};
