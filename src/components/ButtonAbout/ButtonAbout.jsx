import { Link } from 'react-router-dom';
import './ButtonAbout.scss';

export const ButtonAbout = ({ product, title }) => {

  return (
    <button className="button_desc">
      {
        <Link to={`/${product.category}/${product.id}`} >{title}</Link>  
      }
      
    </button>
  );
};