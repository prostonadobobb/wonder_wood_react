import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { BrowserRouter } from 'react-router-dom/dist';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
