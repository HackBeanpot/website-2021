import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';
import AboutItem from "../components/aboutItem/about-item";

import favicon from './favicon.png';

export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () => {
  return (
    <>
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
        <Welcome />
        <ThemeAnnouncement />
        <AboutItem/>
      </div>
    </>
  );
};
