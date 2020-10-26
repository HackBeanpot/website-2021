import React from 'react';

import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';
import FAQItems from 'components/faqItems/faq-items';
import AboutItem from 'components/aboutItem/about-item';
import AboutContent from 'data/about-content.json';
import Sponsors2020 from 'components/sponsors-2020'

export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () => {
  return (
    <div>
      <div className="home">
        <Welcome />
        <ThemeAnnouncement />
      </div>
    </div>
  );
};
