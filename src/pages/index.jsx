import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import FAQItems from 'components/faqItems/faq-items';
import AboutItem from 'components/aboutItem/about-item';
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
        title="HackBeanpot 2020"
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
            <h1 className="header__title">HackBeanpot</h1>
            <h2 className="header__event-date">February 7-9, 2020</h2>
            <p className="header__description">
              An independently-run Boston hackathon for curious students,
              hackers, makers, and beginners.
            </p>
            <a
              className="header__cta"
              href="https://tinyurl.com/vcqdsam"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our team!
            </a>
          </div>
          <div className="header__skyline">
            <Skyline />
          </div>
        </section>

        <section className="theme-announcement">
          <div className="container">
            <h2 className="theme__title">Our theme for this year&nbsp;is...</h2>
            <div className="theme__content-wrapper">
              <img
                src={LogoAnimation}
                alt="Animated logo"
                className="theme__logo"
              />
              <div className="theme__content">
                <p className="theme__sprout">Sprout!</p>
                <p>
                  Sprout is a representation of what we stand for as an
                  organization and what we hope to offer all our attendees:
                  growth in new skills, relationships, and experiences. Oh, and
                  we're trying to up our sustainability game too.
                </p>
                <p>
                  So whether you're a seasoned hackathon-goer, a
                  I-have-never-written-a-line-of-code-in-my-life beginner, or
                  someone in between, we guarantee you'll learn something new at
                  HackBeanpot 2020!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <img
            src={HomeAboutPattern}
            alt="Animated logo"
            className="about__pattern"
          />
          <div className="container">
            <h2 className="about__title">HackBeanpot is about...</h2>
            {AboutContent.map((item, index) => (
              <AboutItem
                key={`about-item-${index}`}
                index={index}
                title={item.title}
                content={item.content}
                img={item.img}
                btn={item.btn}
              />
            ))}
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <h2 className="faq__title">FAQ</h2>
            <FAQItems />
            <div className="faq__cta-group">
              <p className="faq__cta-label">Don't see your question?</p>
              <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="faq__cta"
              >
                Let us know!
              </a>
            </div>
          </div>
        </section>

        <section className="home-sponsors">
          <span className="home-sponsors__circuit">
            <HomeSponsorsCircuit />
          </span>
          <div className="container">
            <h2 className="home-sponsors__title">Our Sponsors</h2>
            <Sponsors2020 />
          </div>
        </section>
      </div>
    </div>
  );
};
