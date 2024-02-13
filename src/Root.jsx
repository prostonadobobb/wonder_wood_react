import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/pages/HomePage/HomePage';

export const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};