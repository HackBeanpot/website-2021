import React from 'react';
import NewsletterSignup from '../components/newsletter-signup'
import DynamicLink from './dynamic-link';
import SocialLinks from 'data/social-links.json';

import LogoWhite from 'images/logo-white.jsx';

const Footer = () => (
  <div className="footer">
    <div>
      <ul className="footer__social">
        {SocialLinks.map((item, index) => {
          return (
          <li key={`social-link-${index}`}>
            <DynamicLink to={item.link} className="footer__social-link">
              <i className={`mdi mdi-36px ${item.iconClass}`} />
              </DynamicLink>
              </li>
              );
        })}
      </ul>
    </div>
    <div className="footer__row">
      <div className="footer__logo">
        <LogoWhite />
      </div>
        <NewsletterSignup/>
    </div>
    <div className="footer__legal">
      <p>HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;</p>
      <DynamicLink className="footer__coc-link" to="/code-of-conduct">
        Code of Conduct
      </DynamicLink>
    </div>
  </div>
);

export default Footer;
