import { Union } from '../icons';
import cl from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Flex, Group } from '@mantine/core';

export const Header = () => {
  return (
    <header className={cl['header']}>
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
        <Group className={cl['logo']} spacing={12}>
          <Union />
          Jobored
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
    </header>
  );
};
