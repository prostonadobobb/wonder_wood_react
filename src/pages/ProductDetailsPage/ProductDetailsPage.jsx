import "./ProductDetailsPage.scss";
import { useParams } from "react-router-dom";
import products from "../../api/products";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { ButtonBuy } from "../../components/ButtonBuy/ButtonBuy";

export const ProductDetailsPage = () => {
  const [currentImg, setCurrentImg] = useState('');
  const { productId } = useParams();
  const findProductById = products.find(product => product.id === productId);
  const BASE_URL = 'img/RackImg';

  const { 
    images, 
    id, 
    description,
    kit,
  } = findProductById;

  Object.entries(kit).map(([key, value]) => (
    console.log(key,value)
  ))

  useEffect(() => {
    setCurrentImg(images[0]);
  }, [images])

  return ( 
    <section className="details">
      <div className="container">
        <div className="details__container"> 

          <div className="details__img">  
            <div className="details__img--current">
              <img src={`${BASE_URL}${currentImg}`} alt="details-img" />
            </div>

            <div className="details__img--list">
              {images.map((image) => (
                <button 
                  className={classNames("details__img--btn", {
                    "details__img--btn-active": image === currentImg,
                  })}
                  type='button'
                  key={image}
                  onClick={() => setCurrentImg(image)}
                  >
                  <img 
                    src={`${BASE_URL}${image}`} 
                    alt="product_img" 
                    className="details__img-small" 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="details__info">
            <div className="details__info--title">
              {`Стелаж WonderWood ${id}`}
            </div>

            <div className="details__info--description">
              {description}
            </div>

            <div className="details__info--description-title">
              Комплектація:
            </div>

            <div className="details__info--description-kit">
              {Object.entries(kit).map(([item, value]) => (
                <span key={item}>{`${item}: ${value}`}</span>
              ))}
            </div>

            <ButtonBuy title={'Додати до кошика'}/>
          </div>
          
        </div>
      </div>
    </section>
  );
};
