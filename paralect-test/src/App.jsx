import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { VacanciesAPI } from './api/VacanciesAPI';

function App() {
  useEffect(() => {
    const setToken = async () => {
      const data = await VacanciesAPI.getToken();
      localStorage.setItem('token', data.access_token);
    };
    !localStorage.getItem('token') && setToken();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
