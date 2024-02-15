import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from './HeaderImg/logo.png'
import icon_home from './HeaderImg/icon-home.svg'
import icon_phone from './HeaderImg/icon-phone.svg'
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarLinkClass = classNames("navbar_link", {"scroll": isScrolled});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    <section className={classNames("header", {"scroll": isScrolled})}>
      <div className="container">
        <div className="header_container">
          <NavLink to='/' className="header_logo">
            <img src={logo} alt="header-logo" className={classNames("header_logo-img", {"scroll": isScrolled})} />
          </NavLink>

          <nav className={classNames("navbar", {"scroll": isScrolled})}>
            <ul className="navbar_list">
              <NavLink to='/' className={navbarLinkClass}>
                <img src={icon_home} alt="icon_home" className='navbar_icon' />
              </NavLink>
              <NavLink to='products' className={navbarLinkClass}>стелажі</NavLink>
              <NavLink to='instruction' className={navbarLinkClass}>інструкція</NavLink>
              <NavLink to='cartridges' className={navbarLinkClass}>картриджі</NavLink>
              <NavLink to='contacts' className={navbarLinkClass}>контакти</NavLink>
            </ul>
            <div className="navbar_contact">
              <NavLink to={`tel: ${+380631001010}`} className="navbar_link-phone">
                <img src={icon_phone} alt="icon-phone" className="contact_icon" />
                +3(063) 100-10-10
              </NavLink>
            </div>
          </nav>  
        </div>
      </div>
    </section>
  );
};