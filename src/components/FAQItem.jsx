import React from 'react';

const FAQItem = props => (
    <div>
        <h4>{props.question}</h4>
        <p>{props.answer}</p>
    </div>
);
FAQItem.defaultProps = {
    question: "Question",
    answer: "Answer"
};


export default FAQItem;
