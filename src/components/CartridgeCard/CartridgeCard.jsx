import './CartridgeCard.scss';

import { ButtonAbout } from "../ButtonAbout/ButtonAbout";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

export const CartridgeCard = ({ product }) => {
  
  const BASE_URL = 'img/RackImg';

  return (
    <div className="cartridge">
      <div className="cartridge__container">
        
        <img 
          className='cartridge__img' 
          src={`${BASE_URL}${product.images[0]}`} 
          alt="img__item" 
        />
        
        <div className="cartridge__head">
          <div className="cartridge__title">{product.name}</div>
          <div className="cartridge__price">{`${product.price}₴`}</div>
        </div>
        
        <div className="cartridge__description">{product.descroption}</div>

        <div className="cartridge__buttons">
          <ButtonAbout product={product} title={'Детальніше'} />
          <ButtonBuy title={'Замовити'} />
        </div>

      </div>      
    </div>   
  );
};