import React from 'react';
import './Footer.scss';
import logo from './FooterImg/logo.png'
import { Link, NavLink } from 'react-router-dom';
import icon_facebook from './FooterImg/icon-facebook.svg';
import icon_instagram from './FooterImg/icon-instagram.svg';
import icon_tiktok from './FooterImg/icon-tiktok.svg';
import icon_youtube from './FooterImg/icon-youtube.svg';

export const Footer = ({item, Increment}) => {
  
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__container">
          <NavLink to={'/'} className='footer__logo' >
            <img src={logo} alt="logo" />
          </NavLink>
          
          <div className="footer__nav">
            <div className="footer__title">Розділи</div>

            <ul className="footer__list">
              <NavLink to={'/'} className="footer__list-item">Головна</NavLink>
              <NavLink to={'products'} className="footer__list-item">Стелажі</NavLink>
              <NavLink to={'instruction'} className="footer__list-item">Інструкція</NavLink>
              <NavLink to={'cartridges'} className="footer__list-item">Картириджі</NavLink>
            </ul>
          </div>

          <div className="footer__nav">
            <div className="footer__title">Замовити</div>

            <ul className="footer__list">
              <NavLink to={'/'} className="footer__list-item">Стелаж T1</NavLink>
              <NavLink to={'products'} className="footer__list-item">Стелаж T2</NavLink>
              <NavLink to={'instruction'} className="footer__list-item">Картридж</NavLink>
              <NavLink to={'cartridges'} className="footer__list-item">Лоток</NavLink>
            </ul>
          </div>

          <div className="footer__contacts">
            <div className="footer__title">Контакти</div>

            <ul className="footer__list">
              <Link className="footer__list-item" to="tel:+380934342675">+38 (093) 434-26-75<span>, LifeCell</span></Link>
              <Link className="footer__list-item" to="mailto:support@wonder-wood.store">support@wonder-wood.store</Link>
              <Link className="footer__list-item" to="mailto:commercial@wonder-wood.store">commercial@wonder-wood.store</Link>
            </ul>
          </div>

          <div className="footer__social">
            <div className="footer__title">Соціальні мережі</div>

            <ul className="footer__social-list">
              <Link to={'/'} className="footer__social-item">
                <img src={icon_facebook} alt="social_icon" />
              </Link>
              <Link to={'/'} className="footer__social-item">
                <img src={icon_tiktok} alt="social_icon" />
              </Link>
              <Link to={'/'} className="footer__social-item">
                <img src={icon_instagram} alt="social_icon" />
              </Link>
              <Link to={'/'} className="footer__social-item">
                <img src={icon_youtube} alt="social_icon" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">      
        WonderWood © 2022-2024. All right reserved
      </div>
    </section>
  );
};

export default Footer;