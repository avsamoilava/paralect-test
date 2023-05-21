import { Routes, Route } from 'react-router-dom';
import * as Pages from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.SearchPage />} />
      <Route path="/favorites" element={<Pages.FavoritesPage />} />
      <Route path="/:id" element={<Pages.VacancyPage />} />
      <Route path="/empty" element={<Pages.EmptyPage />} />
    </Routes>
  );
};
