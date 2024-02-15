import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/pages/HomePage/HomePage';
import { ProductsPage } from './components/pages/ProductsPage/ProductsPage';
import { InstructionPage } from './components/pages/InstructionPage/InstructionPage';
import { CartridgesPage } from './components/pages/CartridgesPage/CartridgesPage';
import { ContactsPage } from './components/pages/ContactsPage/ContactsPage';

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