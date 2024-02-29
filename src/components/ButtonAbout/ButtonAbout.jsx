import { Link } from 'react-router-dom';
import './ButtonAbout.scss';

export const ButtonAbout = ({ product, title }) => {
  console.log(product, 'buttonabout')
  return (
    <button className="button_desc">
      {product && (
        <Link to={`/products/${product.id}`} >{title}</Link>  
      )}
      
    </button>
  );
};