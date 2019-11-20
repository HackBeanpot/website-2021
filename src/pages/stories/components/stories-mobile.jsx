import React from 'react';
import Flickity from 'flickity';

import Quotes from 'data/quotes.json';
import Quote from 'pages/stories/components/quote';

import 'flickity/dist/flickity.min.css';

class StoriesMobile extends React.Component {
  componentDidMount() {
    this.flkty = new Flickity('.stories-carousel', {
      wrapAround: false,
      prevNextButtons: false,
      pageDots: true,
      adaptiveHeight: true
    });
  }

  renderQuotes() {
    return Quotes.map((person, index) => {
      return (
        <div key={`stories-${index}`} className="stories-carousel-cell">
          <div className="stories-circles__img-container">
            <img
              className="stories-circles__img"
              src={person.imgSrc}
              alt={person.name}
            />
          </div>
          <Quote quote={person} />
        </div>
      );
    });
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <div className="stories-mobile stories-carousel">
          {this.renderQuotes()}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StoriesMobile;
