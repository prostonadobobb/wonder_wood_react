import './CartridgeCard.scss';

import { ButtonAbout } from "../ButtonAbout/ButtonAbout";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

export const CartridgeCard = ({ product }) => { 
  const BASE_URL = 'img/ProductsImg';
  const {
    name,
    images, 
    price, 
    description
  } = product;

  return (
    <div className="cartridge">
      <div className="cartridge__container">
        
        <img 
          className='cartridge__img' 
          src={`${BASE_URL}${images[0]}`} 
          alt="img__item" 
        />
        
        <div className="cartridge__head">
          <div className="cartridge__title">{name}</div>
          <div className="cartridge__description">{description}</div>
          <div className="cartridge__control">
            <div className="cartridge__buttons">
              <ButtonAbout product={product} title={'Детальніше'} />
              <ButtonBuy title={'Замовити'} />
            </div>

            <div className="cartridge__price">
              {`${price}₴`}
            </div>
          </div>
        </div>
      </div>      
    </div>   
  );
};