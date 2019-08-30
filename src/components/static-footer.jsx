import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import LogoWhite from 'images/logo-white.jsx';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import TwitterBoxIcon from 'mdi-react/TwitterBoxIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';

const StaticFooter = () => (
  <Fragment>
    <div className="dark-background footer">
      <div className="row">
        <div className="offset-sm-2 col-sm-2">
          <LogoWhite />
        </div>
        <div className="footer-links col-sm-6">
          <div>
            <a href="https://www.instagram.com/hackbeanpot" target="blank">
              <InstagramIcon className="icon-small" />
            </a>
            <a href="https://www.facebook.com/hackbeanpot" target="_blank">
              <FacebookBoxIcon className="icon-small" />
            </a>
            <a href="https://twitter.com/hackbeanpot" target="_blank">
              <TwitterBoxIcon className="icon-small" />
            </a>
            <a
              href="https://www.linkedin.com/company/hackbeanpot-inc/"
              target="_blank"
            >
              <LinkedinBoxIcon className="icon-small" />
            </a>
          </div>
          <div>
            HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;
          </div>
          <Link className="coc-link" to="/CodeOfConduct/">
            Code of Conduct
          </Link>
        </div>
      </div>
    </div>
  </Fragment>
);

export default StaticFooter;
