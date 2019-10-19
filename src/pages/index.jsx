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

      <div className="pale-blue-bg home">
        <section className="landing-section container">
          <div className="row">
            <div className="col-md-5">

            </div>
            <div className="col-md-7 header">
              <div className="header-content">
                  <h1 className="header-title">HackBeanpot</h1>
                <p className="header-text">
                  An independently-run Boston hackathon for curious students,
                  hackers, makers, and beginners. 🎉
                  <br />
                  <strong>Thanks for coming to HackBeanpot 2019!</strong>
                  <br />
                  <a
                    style={{ top: '40px' }}
                    href="http://eepurl.com/gCU4x1"
                    role="button"
                    target="_blank"
                    className="primary-btn lg-btn"
                  >
                    Join our mailing list!
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
              </div>
              <div className="col-md-8 theme-text">
                <div className="theme-title">Sprout!</div>
                <div>
                  Sprout is a representation of what we stand for as an organization
                   and what we hope to offer all our attendees: growth in new skills, 
                   relationships, and experiences. Oh, and we're trying to up our 
                   sustainability game too.
                </div>
                <div class="mt-4">
                  So whether you're a seasoned hackathon-goer, 
                   a I-have-never-written-a-line-of-code-in-my-life beginner, 
                   or someone in between, we guarantee you'll learn something 
                   new at HackBeanpot 2020!
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
                  className="btn primary-btn lg-btn"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="sponsors-section yellow-green-bg">
          <div className="container">
            <p className="section-title">Our Sponsors</p>
            <p>Check back closer to the event for a full list of our HackBeanpot 2020 sponsors.</p>
            <p>If your company is interested in joining the HackBeanpot community and becoming a sponsor, reach out to us!</p>
            <div className="mt-2">
              <a 
                href="mailto:sponsorship@hackbeanpot.com"
                class="secondary-button lg-btn shadow">
                  Email Us
              </a>
              <a 
                className="ml-2 sponsor-link"
                href="/sponsors">Or visit our Sponsors Page</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
