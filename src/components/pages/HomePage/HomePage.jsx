
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';
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
              <div className="banner_button">
                <Button title={'Детальніше'} />
              </div>
            </div>

            <div className="banner_photo">
              <img src={banner_img} alt="banner-img" className="banner_photo-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="cards_container">
            <div className="cards_title">
                Стелаж WonderWood
            </div>
            <div className="cards_list">       
                <Card />
                <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="callback">
        <div className="container">
          <div className="callback_container">
            <div className="callback_title">
              замовити <span>безкоштовну</span> консультацію
            </div>
            <Button title={"Зворотній зв'язок"}/>
          </div>
          
        </div>
      </section>
      
      <section className="about">
        <div className="container">
          <div className="about_title">
            WonderWood Microgreen - це:
          </div>
          <div className="about_lists">
            <ul className="about_list">
              <li className="about_item">Органічний продукт</li>
              <li className="about_item">Різноманітність смаків</li>
              <li className="about_item">Корисні властивості</li>
              <li className="about_item">Компактність</li>
              <li className="about_item">Легкість вирощування</li>
            </ul>
            <ul className="about_list">
              <li className="about_item">Швидка продуктивність</li>
              <li className="about_item">Максимальна харчова цінність</li>
              <li className="about_item">Оздоровлюючі здібності</li>
              <li className="about_item">Комплекс вітамінів та мінералів</li>
              <li className="about_item">Всесезонність</li>
            </ul>
          </div>       
        </div>
      </section>
    </section>
  );
};