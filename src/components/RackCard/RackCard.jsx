// import Slider from 'react-slick';
import './RackCard.scss';
import { ButtonAbout } from '../ButtonAbout/ButtonAbout';
import { ButtonBuy } from '../ButtonBuy/ButtonBuy';
import React from 'react';
import { ImageSlider } from '../ImageSlider/ImageSlider';

export const RackCard = ({ product }) => {

  const {
    id,
    images, 
    price, 
    description
  } = product;

  return (
    <div className="product">
      <div className="product__container">
        
        <ImageSlider images={images}/>

        <div className="product__info">
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
    </div>   
  );
};
