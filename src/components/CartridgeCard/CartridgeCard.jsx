import './CartridgeCard.scss';

import { ButtonAbout } from "../ButtonAbout/ButtonAbout";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

export const CartridgeCard = ({ cartridge }) => {
  console.log(cartridge, 'cartridge')
  return (
    <div className="cartridge">
      <div className="cartridge__container">
        
        <img 
          className='cartridge__img' 
          src={`img/CartridgesImg${cartridge.images[0]}`} 
          alt="img__item" 
        />
        
        <div className="cartridge__head">
          <div className="cartridge__title">{cartridge.name}</div>
          <div className="cartridge__price">{`${cartridge.price}₴`}</div>
        </div>
        
        <div className="cartridge__description">{cartridge.descroption}</div>

        <div className="cartridge__buttons">
          <ButtonAbout product={cartridge} title={'Детальніше'} />
          <ButtonBuy title={'Замовити'} />
        </div>

      </div>      
    </div>   
  );
};