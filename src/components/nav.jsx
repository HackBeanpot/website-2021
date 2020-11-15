import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

import DynamicLink from './dynamic-link.jsx';
import NavLinks from 'data/nav-links.json';

import LogoIcon from 'images/svg/logo-icon.jsx';

const Nav = () => {
  const hasScrolled = useScrollYPosition() > 0;

  return (
  <nav className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
    <DynamicLink to="/" className="nav__logo">
      <LogoIcon />
    </DynamicLink>
    <ul className="nav__list">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item">
            <DynamicLink className="nav__link" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  </nav>
  )
}

export default Nav;
