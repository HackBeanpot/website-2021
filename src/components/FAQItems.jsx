import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class FAQItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childElements = this.props.FAQs.map(FAQ => (
      <div className="faq-masonry-element">
        <h4>{FAQ.question}</h4>
        <p>{FAQ.answer}</p>
      </div>
    ));

    return <Masonry>{childElements}</Masonry>;
  }
}
FAQItems.defaultProps = {
  FAQs: [
    {
      question: 'What is your name?',
      answer: 'Sir Galahad of Camelot.'
    },
    {
      question: 'What is your quest?',
      answer: 'I seek the Grail.'
    },
    {
      question: 'What... is your favorite color?',
      answer: 'Blue. No yell-- auuuuuuuugh!'
    }
  ]
};

export default FAQItems;
