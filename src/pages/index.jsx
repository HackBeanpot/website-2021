import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import FAQItems from 'components/faqItems/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import DynamicLink from 'components/dynamic-link';
import AboutContent from 'data/about-content.json';
import Sponsors2020 from 'components/sponsors-2020'

import BlueTransition from 'images/svg/blue-transition.jsx';
import Compass from 'images/svg/compass.jsx';
import DaytimeScene from 'images/svg/daytime-scene.jsx';
import SunsetScene from 'images/svg/sunset-scene.jsx';
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
            <h1 className="header__title">HackBeanpot will be back!</h1>
            <h2 className="header__event-date">February 19-21, 2021</h2>
            <p className="header__description">Join us for this year's virtual hackathon!</p>
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
          <div className="header__skyline">
            <DaytimeScene />
          </div>
        </section>

        <section className="theme-announcement">
          <div className="theme__transition">
            <BlueTransition />
          </div>
          <div className="container">
            <div className="theme__content-wrapper">
              <div className="theme__content">
                <p className="theme__sprout">Join our virtual campsite!</p>
                <p>
                  At HackBeanpot 2021, we aim to create a welcoming “campsite” 
                  by emphasizing our focus on exploration, creativity, and respect 
                  for the world around us! Camping represents community, 
                  sustainability, and the goal to help each other thrive 
                  given a set of tools.
                </p>
                <p>
                  Hackers can expect to put their resourcefulness to the test,
                  while sharing stories, and learning new skills from peers. 
                  So whether you're a seasoned hackathon-goer, an 
                  ‘I-have-never-written-a-line-of-code’ beginner, or someone 
                  in between, we’re excited for you to embark on this adventure with us!
                </p>
              </div>
              <Compass />
            </div>
          </div>
          <div className="theme__sunset-scene">
            <SunsetScene />
          </div>
        </section>

        {/* <section className="about">
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
          </div>
        </section> */}
      </div>
    </div>
  );
};
