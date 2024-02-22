import './CartridgeCard.scss';

import { ButtonAbout } from "../ButtonAbout/ButtonAbout";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

export const CartridgeCard = ({ cartridge }) => {

  return (
    <div className="cartridge">
      <div className="cartridge_container">
        
        <img 
          className='cartridge_img' 
          src={`/img/CartridgesImg${cartridge.images[0]}`} 
          alt="img_item" 
        />
        
        <div className="cartridge_head">
          <div className="cartridge_title">{cartridge.name}</div>
          <div className="cartridge_price">{`${cartridge.price}₴`}</div>
        </div>
        
        <div className="cartridge_description">{cartridge.descroption}</div>

        <div className="cartridge_buttons">
          <ButtonAbout title={'Детальніше'} />
          <ButtonBuy title={'Замовити'} />
        </div>

      </div>      
    </div>   
  );
};