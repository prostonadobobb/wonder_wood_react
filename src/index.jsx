import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { HashRouter } from 'react-router-dom/dist';
import 'normalize.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Root />
  </HashRouter>
);
