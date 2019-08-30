import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FAQItems from 'components/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import CountdownClock from 'components/countdownClock/countdown-clock';
import FAQs from 'data/faqs.json';
import AboutContent from 'data/about-content.json';
import Sponsors2019 from 'components/sponsors-2019';
import Logo from 'images/logo-full.jsx';

import HomeBlob1 from 'images/home-blob-1';
import HomeBlob2 from 'images/home-blob-2';
import HomeBlob3 from 'images/home-blob-3';
import HomeBlob4 from 'images/home-blob-4';
import HomeBlob5 from 'images/home-blob-5';
import HomeBlob6 from 'images/home-blob-6';

import Circuit1 from 'images/circuit-1';
import Circuit2 from 'images/circuit-2';

import favicon from './favicon.png';

const App = () => {
  return (
    <div>
      <Helmet
        title="HackBeanpot 2019"
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

      <div className="light-background home">
        <HomeBlob1 />
        <HomeBlob2 />
        <HomeBlob3 />
        <HomeBlob4 />
        <HomeBlob5 />
        <HomeBlob6 />
        <Circuit1 />
        <Circuit2 />
        <section className="landing-section container">
          <div className="row">
            <div className="hero-logo col-md-5">
              <Logo />
            </div>
            <div className="col-md-7 header">
              <div className="header-content">
                <div className="logo-div">
                  <div className="mobile-logo">
                    <Logo />
                  </div>
                  <h1 className="header-title">HackBeanpot</h1>
                </div>
                <p className="header-text">
                  An independently-run Boston hackathon for curious students,
                  hackers, makers, and beginners. 🎉
                  <br />
                  <strong>Thanks for coming to HackBeanpot 2019!</strong>
                  <br />
                  <a
                    style={{ top: '40px' }}
                    href="https://forms.gle/gvfW8g6xjtFwcypv7"
                    role="button"
                    target="_blank"
                    className="yellow-btn lg-btn"
                  >
                    Join our team!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-announcement pale-blue-bg">
          <div className="container">
            <p className="section-title">Our theme for this year is...</p>
            <div className="row">
              <div className="hero-logo col-md-4">
                <Logo />
              </div>
              <div className="col-md-8 theme-text">
                <div className="theme-title">Sprout!</div>
                <div>
                  Sprout is an embodiment for what HackBeanpot stands for -
                  openness to learning new things, and having fun! We wanted to
                  make it our focus theme this year to cultivate relationships
                  that foster growth.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section sprout-green-bg">
          <div className="container">
            <p className="section-title">HackBeanpot is about...</p>
            {AboutContent.map(item => (
              <AboutItem
                title={item.title}
                content={item.content}
                imgSrc={item.imgSrc}
                hasBtn={item.hasBtn}
                btn={item.btn}
                floatDirection={item.floatDirection}
              />
            ))}
          </div>
        </section>
        <section className="faq-section pale-blue-bg">
          <div className="container">
            <p className="faq-title">Frequently Asked Questions</p>
            <FAQItems FAQs={FAQs} />
            <div>
              <div className="center-text faq-button-title">
                Don't see your question?
                <br />
                <br />
                <a
                  href="mailto:team@hackbeanpot.com"
                  role="button"
                  className="btn yellow-btn lg-btn"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="sponsors-section sprout-green-bg">
          <div className="container">
            <p className="section-title">2019 Sponsors</p>
            <Sponsors2019 />
            <a
              href="/sponsors"
              role="button"
              className="yellow-btn lg-btn sponsor-button sponsor-button-center"
            >
              Become a sponsor
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
