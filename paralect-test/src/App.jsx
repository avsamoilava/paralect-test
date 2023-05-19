import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { VacanciesAPI } from './api/VacanciesAPI';
import Context from './Context';

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
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
