// import Slider from 'react-slick';
import './Card.scss';
import products from '../../api/products';
import { ButtonAbout } from '../ButtonAbout/ButtonAbout';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';



export const Card = () => {

  return (
    <div className="product">

      <div className="product_container">
        
        <div className='product_img'>
          <img src={products[0].images[0]} alt="img_item" />
        </div>

        <div className="product_title">стелаж т1</div>
        <div className="product_description">Одне відділення під картридж із мікрозеленню</div>

        <div className="product_buttons">
          <ButtonAbout title={'Детальніше'} />
          <ButtonBuy title={'Замовити'} />
        </div>

      </div> 

      
      
    </div>   
  );
};