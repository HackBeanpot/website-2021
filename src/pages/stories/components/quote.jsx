import React, { Fragment } from 'react';

const Quote = props => (
  <Fragment>
    {!!props.quote ? (
      <div>
        <div className="quote-box charles" id={props.quoteId}>
          <span className="noClick">"{props.quote.content}"</span>
        </div>
        <h6 className="stories-quote-from noClick">
        - {props.quote.author},{' '}
        <span className="noClick">{props.quote.company}</span>
      </h6>
    </div>
    ) : null}
  </Fragment>
);

Quote.defaultProps = {
  quote: null,
  hasBtn: false
};

export default Quote;
