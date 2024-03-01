import products from '../../api/products';
import { RackCard } from '../../components/RackCard/RackCard';
import './ProductsPage.scss';

export const ProductsPage = () => {

  return (
    <section className="products">
      <div className="container">
        <div className="products__list">
          {products.map(product => (
            <RackCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};