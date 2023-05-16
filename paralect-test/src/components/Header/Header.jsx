import React from 'react';
import cl from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={cl['header']}>
      <div className={cl['logo']}>LOGO</div>
      <nav className={cl['menu']}>
        <ul>
          <NavLink to={'/'}>Поиск вакансий</NavLink>
          <NavLink to={'/favorites'}>Избранное</NavLink>
        </ul>
      </nav>
    </header>
  );
};
