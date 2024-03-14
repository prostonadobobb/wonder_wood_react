import './CartridgesPage.scss';
import { CartridgeCard } from '../../components/CartridgeCard/CartridgeCard';
import products from '../../api/products';

export const CartridgesPage = () => {
  const cartridgesProducts = products.filter(product => (
    product.category === 'cartridges'
  ))


    console.log(cartridgesProducts)

  return (
    <section className="cartridges"> 
    <div className="container">
      <div className="cartridges__container">
        {cartridgesProducts.map(cartridge => (
          <CartridgeCard key={cartridge.id} product={cartridge} />
        ))}  
      </div>
    </div>
  </section>
  );
};