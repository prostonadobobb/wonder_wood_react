import { Button } from '../../Button/Button';
import './HomePage.scss';
import banner_img from './HomePageImg/jumb-shelv.png';

export const HomePage = () => {
  return (
    <section className='home'>
 
      <section className="banner">
        <div className="container">
          <div className="banner_container">
            <div className="banner_info">
              <div className="banner_info-text">
                Твій майбутній домашній сад вже чекає на тебе
              </div>
              <h1 className="banner_info-title">
                Вирощуйте мікрозелень у себе дома за допомогою стелажа <span>Wonderwood</span>
              </h1>
              <Button title={'Детальніше'} />
            </div>

            <div className="banner_photo">
              <img src={banner_img} alt="banner-img" className="banner_photo-img" />
            </div>
          </div>
        </div>
        
      
      </section>
      
    </section>
  );
};