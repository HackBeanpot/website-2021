import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Welcome from '../components/sections/welcome';
import ThemeAnnouncement from '../components/sections/theme-announcement';

import favicon from './favicon.png';

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
