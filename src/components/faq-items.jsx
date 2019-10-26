import React from 'react';
import Masonry from 'react-masonry-component';
import FAQs from 'data/faqs.json';

import LeafNode from 'images/leaf-node.jsx';

const masonryOptions = {
  gutter: 20, // Horizontal margin for masonry columns
  itemSelector: '.faq-masonry-element'
};

const FAQItems = props => {
  const childElements = FAQs.map((FAQ, index) => (
    <li key={`faq-${index}`} className="faq-masonry-element">
      <span className="faq-item__leaf">
        <LeafNode />
      </span>
      <div>
        <p className="faq-item__question">{FAQ.question}</p>
        <p
          className="faq-item__answer"
          dangerouslySetInnerHTML={{ __html: FAQ.answer }}
        />
      </div>
    </li>
  ));

  return (
    <Masonry
      elementType={'ul'}
      options={masonryOptions}
      className="faq-masonry-wrapper"
    >
      {childElements}
    </Masonry>
  );
};

export default FAQItems;
