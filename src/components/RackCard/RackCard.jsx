// import Slider from 'react-slick';
import './RackCard.scss';
import { ButtonAbout } from '../ButtonAbout/ButtonAbout';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export const RackCard = ({ product }) => {
  const [currentImg, setCurrentImg] = useState('');
  const BASE_URL = 'img/RackImg';

  const {
    id,
    images, 
    price, 
    description
  } = product;

  useEffect(() => {
    setCurrentImg(images[0])
  }, [images])
  // <---Потрібно потім переробити на слайдер, щоб не оновлювавався постійно компонент при виклику setInterval--->
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImgIndex(prevIndex => (prevIndex + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [images.length]);

  return (
    <div className="product">
      <div className="product__container">
        
        <div className='product__img-current'>
          <img src={`${BASE_URL}${currentImg}`} alt="img__item" />
        </div>

        <div className="product__img-list">
          {images.map((image) => (
            <button 
              className={classNames("product__img-btn", {
                "product__img-btn--active": image === currentImg,
              })}
              type='button'
              key={image}
              onClick={() => setCurrentImg(image)}
            >
              <img 
                src={`${BASE_URL}${image}`} 
                alt="product_img" 
                className="product__img-small" 
              />
            </button>
          ))}
        </div>

        <div className="product__title">{`стелаж ${id}`}</div>
        <div className="product__description">{description}</div>

        <div className="product__control">
          <div className="product__buttons">
            <ButtonAbout product={product} title={'Детальніше'} />
            <ButtonBuy product={product} title={'Додати в кошик'} />
          </div>

          <div className="product__price">
            {`${price} ₴`}
          </div>
        </div>

      </div>      
    </div>   
  );
};
