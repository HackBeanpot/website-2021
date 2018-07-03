import React, { Component } from 'react';
import Link from 'gatsby-link';

class AboutItem extends Component {
  render() {
    if (this.props.floatDirection === 'left') {
      return (
        <div style={{clear: 'both'}}>
          <img
            src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
            height="40%"
            width="40%"
            style={{ float: 'left' }}
          />
          <h3>{this.props.header}</h3>
          <h4>{this.props.content}</h4>
          <Link to={this.props.pageLink}>Link to {this.props.pageLink}</Link>
        </div>
      );
    } else if (this.props.floatDirection === 'right') {
      return (
        <div style={{clear: 'both'}}>
          <img
            src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
            height="40%"
            width="40%"
            style={{ float: 'right' }}
          />
          <h3>{this.props.header}</h3>
          <h4>{this.props.content}</h4>
          <Link to={this.props.pageLink}>Link to {this.props.pageLink}</Link>
        </div>
      );
    }
  }
}
AboutItem.defaultProps = {
  header: 'AboutItem section header',
  content: 'AboutItem section content',
  pageLink: '/',
  floatDirection: 'left'
};

export default AboutItem;
