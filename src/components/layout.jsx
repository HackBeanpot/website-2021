import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/footer';
import Nav from 'components/nav';
import NavMobile from 'components/nav-mobile';

import favicon from '../pages/favicon.png';

import '../../node_modules/@mdi/font/css/materialdesignicons.min.css';
import 'styles/main.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => (
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
          content: 'hackbeanpot, hackathon, boston, 2021, students, hackers, makers, beginners, hack, beanpot, virtual, online, free, learning, learn, computer, science, programming, program, coding, code'
        },
        {
          name: 'theme-color',
          content: '#A4DBE8'
        }
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Nav />
    <NavMobile />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
