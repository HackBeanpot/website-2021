import React, { Fragment } from 'react';

const FAQItems = props => (
  <div>
    {props.FAQs.map(FAQ => (
      <Fragment>
        <h4>{FAQ.question}</h4>
        <p>{FAQ.answer}</p>
      </Fragment>
    ))}
  </div>
);
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
