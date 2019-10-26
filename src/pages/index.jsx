import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FAQItems from 'components/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import AboutContent from 'data/about-content.json';

import Skyline from 'images/header-skyline.png';
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

      <div className="home">
        <section className="header">
          <img
            src={Skyline}
            alt="Skyline illustration"
            className="header__skyline"
          />
          <div class="container">
            <div className="header__content">
              <h1 className="header__title">HackBeanpot</h1>
              <p className="header__description">
                An independently-run Boston hackathon for curious students,
                hackers, makers, and beginners. Applications for HackBeanpot
                2020 are opening soon!
              </p>
              <a
                href="http://eepurl.com/gCU4x1"
                role="button"
                target="_blank"
                className="header__cta"
              >
                Join our mailing list
              </a>
            </div>
          </div>
        </section>

        <section className="theme-announcement">
          <div className="container">
            <h2 className="theme__title">Our theme for this year is...</h2>
            {/* <div className="hero-logo col-md-4" /> */}
            <p className="theme__sprout">Sprout!</p>
            <p>
              Sprout is a representation of what we stand for as an organization
              and what we hope to offer all our attendees: growth in new skills,
              relationships, and experiences. Oh, and we're trying to up our
              sustainability game too.
            </p>
            <p>
              So whether you're a seasoned hackathon-goer, a
              I-have-never-written-a-line-of-code-in-my-life beginner, or
              someone in between, we guarantee you'll learn something new at
              HackBeanpot 2020!
            </p>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <h2 className="about__title">HackBeanpot is about...</h2>
            {AboutContent.map((item, index) => (
              <AboutItem
                key={`about-item-${index}`}
                index={index}
                title={item.title}
                content={item.content}
                imgSrc={item.imgSrc}
                btn={item.btn}
              />
            ))}
          </div>
        </section>

        <section className="faq">
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
                Email Us
              </a>
            </div>
          </div>
        </section>

        <section className="sponsors">
          <div className="container">
            <h2 className="sponsors__title">Our Sponsors</h2>
            <div className="sponsors__content">
              <p>
                Check back closer to the event for a full list of our
                HackBeanpot 2020 sponsors.
              </p>
              <p>
                If your company is interested in joining the HackBeanpot
                community and becoming a sponsor, reach out to us!
              </p>
            </div>
            <div className="sponsors__cta-group">
              <a
                href="mailto:sponsorship@hackbeanpot.com"
                role="button"
                class="sponsors__cta"
              >
                Email Us
              </a>
              <a className="sponsors__cta-link" href="/sponsors">
                Or visit our Sponsors Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
