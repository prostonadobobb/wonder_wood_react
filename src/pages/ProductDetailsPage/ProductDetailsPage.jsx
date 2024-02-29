import "./ProductDetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../api/products";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find(product => product.id === productId));
  }, [productId]);

  console.log(product, productId);

  return (
    
    <section className="details">
      <div className="container">
        <div className="details__container">

        </div>
      </div>
    </section>
  );
};
