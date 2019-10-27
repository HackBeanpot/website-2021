import React from 'react';
import Masonry from 'react-masonry-component'; // https://github.com/eiriklv/react-masonry-component
import FAQs from 'data/faqs.json';

import LeafNode from 'images/svg/leaf-node.jsx';

const masonryOptions = {
  columnWidth: '.faq-item-sizer',
  gutter: '.faq-gutter-sizer', // Horizontal margin for masonry columns
  itemSelector: '.faq-masonry-element',
  percentPosition: true
};

const FAQItems = props => {
  const childElements = FAQs.map((FAQ, index) => [
    <div className="faq-item-sizer" />,
    <div className="faq-gutter-sizer" />,
    <div key={`faq-${index}`} className="faq-masonry-element">
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
    </div>
  ]);

  return (
    <Masonry options={masonryOptions} className="faq-masonry-wrapper">
      {childElements}
    </Masonry>
  );
};

export default FAQItems;
