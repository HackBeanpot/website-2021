import React from 'react';
import Quote from 'pages/stories/components/quote';
import Circuit1 from 'images/circuit-1';
import SponsorBlob1 from 'images/sponsor-blob-1';
import SponsorBlob2 from 'images/sponsor-blob-2';
import Quotes from 'data/stories.json';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0,
    };
  }

  renderImages(quoteIndexes) {
    return quoteIndexes.map(index => {
      let bottom = 0;
      if (index == 1) bottom = '75px';
      if (index == 4) bottom = '-75px';
      let activeBorder = 'solid 5px #eeeeee';
      if (this.state.currentQuote == index) activeBorder = 'solid 5px #fad20a';
      return (
        <div key={`stories-${index}`} style={{ width: '33%', bottom: bottom }}>
          <div
            className="stories-round-image center"
            style={{ border: activeBorder }}
          >
            <img
              className="portrait"
              src={Quotes[index].imgSrc}
              onClick={() => {
                this.setState({ currentQuote: index });
              }}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="light-background stories-welcome">
        <div className="container">
          <div className="stories-title">We've got stories to share</div>
          <div className="row">
            <div className="stories-cta col-md-8">
              Whether you're an attendee, mentor, or an organizer, you'll come
              to HackBeanpot with a story to tell. <br /> Here's a collection of
              stories of previous attendees. Our hackers are our priority and we
              aim to have everyone walk out with stories as unique and inspiring
              as these!
            </div>
          </div>
          <div className="row top-images">{this.renderImages([0, 1, 2])}</div>
          <Quote quote={Quotes[this.state.currentQuote]} />
          <div className="row bottom-images">
            {this.renderImages([3, 4, 5])}
          </div>
        </div>
        <Circuit1 />
        <SponsorBlob1 />
        <SponsorBlob2 />
      </div>
    );
  }
}

export default Stories;
