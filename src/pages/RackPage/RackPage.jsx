import './RackPage.scss';
import { RackCard } from '../../components/RackCard/RackCard';
import products from '../../api/products';

export const RackPage = () => {

  const rackProducts = products.filter(product => (
    product.category === 'racks'
  ))

  return (
    <section className="products">
      <div className="container">
        <div className="products__list">
          {rackProducts.map(rack => (
            <RackCard key={rack.id} product={rack} />
          ))}
        </div>
      </div>
    </section>
  );
};