// import Slider from 'react-slick';
import './RackCard.scss';
import products from '../../api/products';
import { ButtonAbout } from '../ButtonAbout/ButtonAbout';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';

export const RackCard = () => {
  
  return (
    <div className="product">
      <div className="product_container">
        
        <div className='product_img'>
          <img src={`/img/RackImg${products[0].images[0]}`} alt="img_item" />
        </div>

        <div className="product_title">стелаж T1</div>
        <div className="product_description">Одне відділення під картридж із мікрозеленню</div>

        <div className="product_control">
          <div className="product_buttons">
            <ButtonAbout title={'Детальніше'} />
            <ButtonBuy title={'Замовити'} />
          </div>

          <div className="product_price">
            800 ₴
          </div>
        </div>

      </div>      
    </div>   
  );
};