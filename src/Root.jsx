import { Routes, Route, useLocation } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { RackPage } from './pages/RackPage/RackPage';
import { InstructionPage } from './pages/InstructionPage/InstructionPage';
import { CartridgesPage } from './pages/CartridgesPage/CartridgesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { useEffect } from 'react';

export const Root = () => {

  const ScrollToTopOnRouteChange = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return ( 
    <>
      <ScrollToTopOnRouteChange />  
      <Routes> 
        <Route path='/' element={<App />}>

          <Route index element={<HomePage />} />

          <Route path='racks'>
            <Route index element={<RackPage />} />
            <Route path=':productId' element={<ProductDetailsPage />} />
          </Route>
          <Route path='instruction'>
            <Route index element={<InstructionPage />} />
          </Route>
          <Route path='cartridges'>
            <Route index element={<CartridgesPage />} />
            <Route path=':productId' element={<ProductDetailsPage />} />
          </Route>
          <Route path='contacts'>
            <Route index element={<ContactsPage />} />
          </Route>
          <Route path='basket'>
            <Route index element={<BasketPage />} />
          </Route>
          
        </Route>
      </Routes>
    </>   
    
    
  );
};