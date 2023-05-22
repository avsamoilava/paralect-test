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
  const saveQueryParams = (params) => setQueryParams(params);
  const saveFavorites = (list) => setFavorites(list);

  const contextStore = {
    queryParams,
    saveQueryParams,
    favorites,
    saveFavorites,
  };

  useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    saveFavorites(JSON.parse(localStorage.getItem('favorites')));
  }, []);

  useEffect(() => {
    const setToken = async () => {
      const data = await VacanciesAPI.getToken();
      localStorage.setItem('token', data.access_token);
    };
    !localStorage.getItem('token') && setToken();
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
