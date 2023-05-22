import { Union } from '../icons';
import cl from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Flex, Group, useMantineTheme, Header, Text, Menu } from '@mantine/core';

export const HeaderBlock = () => {
  const theme = useMantineTheme();
  return (
    <Header bg={theme.colors.white}>
      <Flex
        mih={84}
        gap={280}
        justify="start"
        align="center"
        direction="row"
        wrap="wrap"
        maw={1138}
        m={'0 auto'}
        p={10}
      >
        <Group spacing={12}>
          <Union />
          <Text ff={'Poppins, sans-serif'} fz={24} fw={600}>
            Jobored
          </Text>
        </Group>
        <nav className={cl['menu']}>
          <ul>
            <li>
              <NavLink to={'/'}>Поиск Вакансий</NavLink>
            </li>
            <li>
              <NavLink to={'/favorites'}>Избранное</NavLink>
            </li>
          </ul>
        </nav>
      </Flex>
    </Header>
  );
};
