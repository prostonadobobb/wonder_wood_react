import './CartridgesPage.scss';
import { CartridgeCard } from '../../components/CartridgeCard/CartridgeCard';
import cartridges from '../../api/cartridges';

export const CartridgesPage = () => {
  return (
    <section className="cartridges"> 
    <div className="container">
      <div className="cartridges__container">
        {cartridges.map(cartridge => (
          <CartridgeCard cartridge={cartridge} key={cartridge.id} />
        ))}  
      </div>
    </div>
  </section>
  );
};