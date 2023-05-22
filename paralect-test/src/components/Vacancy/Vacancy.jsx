import React, { useEffect, useState, useContext } from 'react';
import cl from './Vacancy.module.scss';
import { Link } from 'react-router-dom';
import { Star, StarFilled } from '../icons';
import Context from '../../context';
import { Flex, Text, Title, Box, useMantineTheme } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { setPaymentInfo } from '../../utils';

export const Vacancy = ({ vacancy, mode }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, saveFavorites } = useContext(Context);
  const [payment, setPayment] = useState('');
  const theme = useMantineTheme();
  const { profession, firm_name, town, type_of_work, payment_to, payment_from, currency, id } =
    vacancy;

  useEffect(() => {
    favorites?.find((elem) => elem.id === id) && setIsFavorite(true);
  }, [favorites, id]);

  useEffect(() => {
    setPayment(setPaymentInfo(payment_from, payment_to, currency));
  }, []);

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

  const Wrapper = ({ children }) => {
    return mode === 'nolink' ? <Box>{children}</Box> : <Link to={`/${id}`}>{children}</Link>;
  };

  return (
    <Flex
      justify={'space-between'}
      p={24}
      gap={40}
      bg={theme.colors.white}
      ta={'left'}
      w={'100%'}
      style={{
        borderRadius: '10px',
        border: `1px solid ${theme.colors.grey200}`,
      }}
      sx={{ '@media (max-width: 48em)': { padding: 10 } }}
      data-elem={`vacancy-${id}`}
    >
      <Wrapper>
        <Flex direction={'column'} gap={mode === 'nolink' ? 16 : 12}>
          <Title
            order={3}
            color={mode === 'nolink' ? theme.colors.black : theme.colors.blue500}
            fz={mode === 'nolink' ? 28 : 20}
            lh={mode === 'nolink' ? '24px' : '34px'}
            sx={{ '@media (max-width: 48em)': { fontSize: 16 } }}
          >
            {profession}
          </Title>
          <Flex
            gap={12}
            align={'center'}
            fz={mode === 'nolink' ? 20 : 16}
            sx={{ '@media (max-width: 48em)': { flexDirection: 'column', alignItems: 'start' } }}
          >
            {payment ? (
              <React.Fragment>
                <Text fw={600}>{payment}</Text>
                <Text
                  fw={600}
                  color={theme.colors.grey500}
                  sx={{ '@media (max-width: 48em)': { display: 'none' } }}
                >
                  •
                </Text>
              </React.Fragment>
            ) : null}
            <Text>{type_of_work.title}</Text>
          </Flex>
          <Flex gap={8} align={'center'}>
            <IconMapPin size={20} color="#ACADB9" />
            <Text>{town?.title}</Text>
          </Flex>
        </Flex>
      </Wrapper>
      <button
        onClick={clickHandler}
        className={cl['star-btn']}
        data-elem={`vacancy-${id}-shortlist-button`}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </Flex>
  );
};
