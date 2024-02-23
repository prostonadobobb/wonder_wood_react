import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from './HeaderImg/logo.png'
import icon_home from './HeaderImg/icon-home.svg'
import icon_phone from './HeaderImg/icon-phone.svg'
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const navRef = useRef(null);
  const navbarLinkClass = classNames("navbar__link", {"scroll": isScrolled});
  console.log(isScrolled, 'isScrolled', openBurger, 'openBurger', navRef);

  const handleScroll = useCallback(() => {
    const shouldScroll = window.scrollY > 30;
    if (isScrolled !== shouldScroll) {
      setIsScrolled(shouldScroll);
    }
  }, [isScrolled]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenBurger(false);
    }
  }, []);
  
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
            <div className="navbar__contact">
              <NavLink to={`tel: ${+380631001010}`} className="navbar__link-phone">
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