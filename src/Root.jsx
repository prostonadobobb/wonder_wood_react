import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { InstructionPage } from './pages/InstructionPage/InstructionPage';
import { CartridgesPage } from './pages/CartridgesPage/CartridgesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';

export const Root = () => {
  return (
   
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />

        <Route path='products'>
          <Route index element={<ProductsPage />} />
        </Route>
        <Route path='instruction'>
          <Route index element={<InstructionPage />} />
        </Route>
        <Route path='cartridges'>
          <Route index element={<CartridgesPage />} />
        </Route>
        <Route path='contacts'>
          <Route index element={<ContactsPage />} />
        </Route>
      </Route>
    </Routes>
    
  );
};