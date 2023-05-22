import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { HeaderWithBurger as Header } from './components/Header/HeaderWithBurger';
import { useEffect, useState } from 'react';
import { VacanciesAPI } from './api/VacanciesAPI';
import Context from './context';
import { MantineProvider } from '@mantine/core';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [queryParams, setQueryParams] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [token, setToken] = useState('');
  const saveQueryParams = (params) => setQueryParams(params);
  const saveFavorites = (list) => setFavorites(list);
  const saveToken = (token) => setToken(token);

  const contextStore = {
    queryParams,
    saveQueryParams,
    favorites,
    saveFavorites,
    token,
    saveToken,
  };

  useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    saveFavorites(JSON.parse(localStorage.getItem('favorites')));
  }, []);

  useEffect(() => {
    const tokenItem = localStorage.getItem('token');
    const changeToken = async () => {
      const data = await VacanciesAPI.getToken();
      localStorage.setItem('token', data.access_token);
      saveToken(data.access_token);
    };
    const checkToken = async () => {
      const data = await VacanciesAPI.getToken();
      const checkedToken =
        data.ttl < Date.now() / 1000
          ? await VacanciesAPI.refreshToken(data.refresh_token)
          : data.access_token;
      saveToken(checkedToken);
      checkedToken !== localStorage.getItem('token') && localStorage.setItem('token', checkedToken);
    };
    tokenItem ? checkToken() : changeToken();
  }, []);

  return (
    <Context.Provider value={contextStore}>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <AppRouter />
        </MantineProvider>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
