import cartridges from '../../api/cartridges';
import { ButtonCallback } from '../../components/ButtonCallback/ButtonCallback';
import { ButtonPlay } from '../../components/ButtonPlay/ButtonPlay';
import { CartridgeCard } from '../../components/CartridgeCard/CartridgeCard';
import { RackCard } from '../../components/RackCard/RackCard';
import './HomePage.scss';
import banner_img from './HomePageImg/jumb-shelv.png';
import instruction_image from './HomePageImg/t2-instruction.png';
import advantage_1 from './HomePageImg/advantage1.svg';
import advantage_2 from './HomePageImg/advantage2.svg';
import advantage_3 from './HomePageImg/advantage3.svg';
import t1_upsell from './HomePageImg/t1_upsell.png';
import t2_upsell from './HomePageImg/t2_upsell.png';
import products from '../../api/products';
import { useState } from 'react';
import { ModalCallback } from '../../components/ModalCallback/ModalCallback';
import { ModalVideo } from '../../components/ModalVideo/ModalVideo';


export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const scrollTo = () => {
    const elem = document.getElementById("cards");
    if(elem) {
      elem.scrollIntoView({behavior: "smooth", block: "start" })
    };
  };

  return (
    <section className='home'>
 
      <section className="banner">
        <div className="container">
          <div className="banner__container">
            <div className="banner__info">
              <div className="banner__info-text">
                Твій майбутній домашній сад вже чекає на тебе
              </div>
              <h1 className="banner__info-title">
                Вирощуйте мікрозелень у себе дома за допомогою стелажа <span>Wonderwood</span>
              </h1>
              <div className="banner__button">
                <ButtonCallback onClick={scrollTo} title={'Детальніше'} />
              </div>
            </div>

            <div className="banner__photo">
              <img src={banner_img} alt="banner-img" className="banner__photo-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cards" id='cards'>
        <div className="container">
          <div className="cards__container">
            <div className="cards__title">
                Стелаж WonderWood
            </div>
            <div className="cards__list">
              {products.map(product => (
                <RackCard product={product} key={product.id} />
              ))}             
            </div>
          </div>
        </div>
      </section>

      <section className="callback" id='modal'>
        <div className="container">
          <div className="callback__container">
            <div className="callback__title">
              замовити <span>безкоштовну</span> консультацію
            </div>
            <ButtonCallback 
              title={"Зворотній зв'язок"} 
              onClick={() => setShowModal(true)} 
            />
            
            <ModalCallback showModal={showModal} onClose={() => setShowModal(false)} />
                
          </div>
        </div>
      </section>
      
      <section className="about">
        <div className="container">
          <div className="about__title">
            WonderWood Microgreen - це:
          </div>
          <div className="about__lists">
            <ul className="about__list">
              <li className="about__item">Органічний продукт</li>
              <li className="about__item">Різноманітність смаків</li>
              <li className="about__item">Корисні властивості</li>
              <li className="about__item">Компактність</li>
              <li className="about__item">Легкість вирощування</li>
            </ul>
            <ul className="about__list">
              <li className="about__item">Швидка продуктивність</li>
              <li className="about__item">Максимальна харчова цінність</li>
              <li className="about__item">Оздоровлюючі здібності</li>
              <li className="about__item">Комплекс вітамінів та мінералів</li>
              <li className="about__item">Всесезонність</li>
            </ul>
          </div>       
        </div>
      </section>

      <section className="instruction">
        <div className="container">
          <div className="instruction__container">
            <div className="instruction__info">
              <div className='instruction__title'>
                Вирощувати дуже легко Відео-<span>Інструкція</span>
              </div>
              <div className="instruction__text">
                Для твого домашнього сада достатньо запам'ятати пару простих кроків за допомогою нашої інструкції
              </div>
              <ButtonPlay onClick={() => setShowVideo(true)}/>
              <ModalVideo showVideo={showVideo} onClose={() => setShowVideo(false)} />
            </div>
            
            <div className="instruction__image">
              <img src={instruction_image} alt="instruction-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cartridges"> 
        <div className="container">
          <div className="cartridges__container">
            {cartridges.map(cartridge => (
              <CartridgeCard cartridge={cartridge} key={cartridge.id} />
            ))}  
          </div>
        </div>
      </section>

      <section className="for">
        <div className="container">
          <div className="for__container">
            <div className="for__advantages">
              <div className="for__advantage">
                <div className="for__advantage-image">
                  <img src={advantage_1} alt="advantage" />
                </div>
                <div className="for__advantage-title">
                  Для дому
                </div>
                <div className="for__advantage-text">
                  Декоративний стелаж WonderWood ідеально підійде, щоб доповнити інтер'єр, а також ви завжди зможете посмакувати соковиту Мікрозелень, яку так легко виростити разом з нами.
                </div>
              </div>

              <div className="for__advantage">
                <div className="for__advantage-image">
                  <img src={advantage_2} alt="advantage" />
                </div>
                <div className="for__advantage-title">
                  Для закладу
                </div>
                <div className="for__advantage-text">
                Хочете здивувати своїх відвідувачів? Наш стелаж для мікрозелені допоможе це зробити. Встановіть на барі, столиках або замовте індивідуальне гравіювання.
                </div>
              </div>

              <div className="for__advantage">
                <div className="for__advantage-image">
                  <img src={advantage_3} alt="advantage" />
                </div>
                <div className="for__advantage-title">
                  Для офісу
                </div>
                <div className="for__advantage-text">
                  Зробити затишний куток прямо на робочому місці можна за допомогою стелажа microgreen. Доповніть робоче місце та куштуйте свіжу мікрозелень під час кожного перекусу.
                </div>
              </div>
            </div>

            <div className="for__info">
              <div className="for__info-title">Чи важко вирощувати <span>microgreen?</span></div>
              <div className="for__info-text">
                Ми витратили багато часу та провели безліч експериментів для того, щоб зробити процес вирощування мікрозелені максимально простим. Це нам вдалося досягти за допомогою одноразових картриджів WonderWood. Тепер кожен зможе із задоволенням та з мінімальними зусиллями виростити смачний та соковитий microgreen.
              </div>
              <ButtonCallback title={'Переглянути стелажі'}/>
            </div>
          </div>  
        </div>
      </section>
      
      <section className="upsell">
        <div className="container upsell__container">
        <div className="upsell__card">

            <div className="upsell__image">
              <img src={t1_upsell} alt="T1" />
            </div>
            <div className="upsell__info">
              <div className="upsell__title">стелаж t1</div>
              <div className="upsell__text">
                Ідеально підходить для тих, хто тільки хоче познайомитися з мікрозеленню та виростити свою першу культуру
              </div>
              <ButtonCallback title={'Замовити'} />
            </div>
            
          </div>

          <div className="upsell__card">
            <div className="upsell__image">
              <img src={t2_upsell} alt="T1" />
            </div>
            <div className="upsell__info">
              <div className="upsell__title">стелаж t2</div>
              <div className="upsell__text">
              Хочете одразу вирощувати та смакувати декілька microgreen одночасно? <br /> Тоді стелаж Т2 саме для Вас
              </div>
              <ButtonCallback title={'Замовити'} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};