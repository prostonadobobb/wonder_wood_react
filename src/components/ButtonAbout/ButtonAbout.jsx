import { Link } from 'react-router-dom';
import './ButtonAbout.scss';

export const ButtonAbout = ({ id, title }) => {
  return (
    <button className="button_desc">
      <Link to={`/products/${id}`} >{title}</Link>
      
    </button>
  );
};