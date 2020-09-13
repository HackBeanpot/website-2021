import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import FAQItems from 'components/faqItems/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import DynamicLink from 'components/dynamic-link';
import AboutContent from 'data/about-content.json';
import Sponsors2020 from 'components/sponsors-2020'

import Skyline from 'images/svg/skyline.jsx';
import LogoAnimation from 'images/logo-sprout.gif';
import HomeAboutPattern from 'images/home-about-pattern.png';
import HomeSponsorsCircuit from 'images/svg/home-sponsors-circuit.jsx';
import favicon from './favicon.png';

export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () => {
  return (
    <div>
      <Helmet
        title="HackBeanpot 2021"
        meta={[
          {
            name: 'description',
            content:
              'An independently-run Boston hackathon for curious students, hackers, makers, and beginners.'
          },
          {
            name: 'keywords',
            content: 'hackathon, boston, students, hackers, makers, beginners'
          },
          {
            name: 'theme-color',
            content: '#A4DBE8'
          }
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />

      <div className="home">
        <section className="header">
          <div className="container header__content">
            <h1 className="header__title">We'll be back in 2021!</h1>
            <h2 className="header__event-date">February 19-21</h2>
            <a
              className="header__cta"
              href=""
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stay up to date
            </a>
          </div>
          {/* <div className="header__skyline">
            <Skyline />
          </div> */}
        </section>
      </div>
    </div>
  );
};
