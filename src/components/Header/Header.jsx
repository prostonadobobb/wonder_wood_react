import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from './HeaderImg/logo.png'
import icon_home from './HeaderImg/icon-home.svg'
import icon_phone from './HeaderImg/icon-phone.svg'
import icon_basket from './HeaderImg/bascet-img.png';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(null);
  const [openBurger, setOpenBurger] = useState(false);
  const navRef = useRef(null);
  const navbarLinkClass = classNames("navbar__link", {"scroll": isScrolled});
  console.log(location.pathname, isScrolled);

  const handleScroll = useCallback(() => {  
    const shouldScroll = window.scrollY > 30;
   
    if (isScrolled !== shouldScroll) {
      setIsScrolled(shouldScroll);
    }
  }, [isScrolled]);

  useEffect(() => {
    if (location.pathname === "/") {   
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [handleScroll, location.pathname]);
  
  useEffect(() => {
    if (location.pathname === "/" && window.scrollY < 30) {
      setIsScrolled(false);
    }
  }, [location.pathname]);

  const handleClickOutside = useCallback((e) => {
    if (!navRef.current.contains(e.target)) {
      setOpenBurger(false);
    }
  }, [navRef, setOpenBurger]);
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);


  return (
    <section className={classNames("header", {"scroll": isScrolled})}>
      <div className="container">
        <div className="header__container">
          <NavLink to='/' className="header__logo">
            <img src={logo} alt="header-logo" className={classNames("header__logo-img", {"scroll": isScrolled})} />
            <span>WonderWood</span>
          </NavLink>

          <button 
            ref={navRef}
            className={`header__burger ${openBurger ? 'active' : ''}`}
            onClick={() => setOpenBurger(!openBurger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav  className={classNames("navbar", {"scroll": isScrolled, "active": openBurger})}>
            <div className="navbar__list">
              <NavLink to='/' className={navbarLinkClass}>
                <img src={icon_home} alt="icon__home" className='navbar__icon' />
              </NavLink>
              <NavLink to='products' className={navbarLinkClass}>стелажі</NavLink>
              <NavLink to='instruction' className={navbarLinkClass}>інструкція</NavLink>
              <NavLink to='cartridges' className={navbarLinkClass}>картриджі</NavLink>
              <NavLink to='contacts' className={navbarLinkClass}>контакти</NavLink>
            </div>

            <div className='navbar__basket'>
              <NavLink to='basket' className="navbar__basket-link">
                <img src={icon_basket} alt="basket" className="basket__icon" />
                <div className="navbar__basket-link--counter">
                  <span className="navbar__basket-link--length">90</span>
                </div>
              </NavLink>
            </div>

            <div className="navbar__contact">
              <NavLink to={`tel: ${+380631001010}`} className="navbar__contact-link">
                <img src={icon_phone} alt="icon-phone" className="contact__icon" />
                +3(063) 100-10-10
              </NavLink>
            </div>
          </nav>  
        </div>
      </div>
    </section>
  );
};