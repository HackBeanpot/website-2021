import React from 'react';
import Link from 'gatsby-link';

const AboutItem = props => (
  <div style={{ clear: 'both' }}>
    <img
      src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
      className={`align-${props.floatDirection}-img`}
    />
    <h3>{props.header}</h3>
    <h4>{props.content}</h4>
    <Link to={props.pageLink}>Link to {props.pageLink}</Link>
  </div>
);

AboutItem.defaultProps = {
  header: 'AboutItem section header',
  content: 'AboutItem section content',
  pageLink: '/',
  floatDirection: 'left'
};

export default AboutItem;
