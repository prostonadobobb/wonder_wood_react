import './ImageSlider.scss';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

export const ImageSlider = ({ images }) => {
  const BASE_URL = 'img/RackImg';

  return (
    <div className='imageSlider'>
      <Splide
        id="slider__img"
        aria-label="slider__img"
        options={{
          type: "loop",
          autoplay: true,
          perPage: 1,
          resetProgress: false,
          interval: 5000,
        }}
        hasTrack={ false }
      >
        <SplideTrack>
          {images.map(image => (

            <SplideSlide key={image}>
              <img src={`${BASE_URL}${image}`} alt="img__item" />   
            </SplideSlide>
            
          ))}
        </SplideTrack>

        <div className="splide__progress">
          <div className="splide__progress__bar">
          </div>
        </div>
        
      </Splide>
    </div>
  );
};