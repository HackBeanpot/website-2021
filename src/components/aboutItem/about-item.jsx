import React from 'react';

const AboutItem = props => {
  let button;

  if (props.btn) {
    button = (
      <a
        href={props.btn.url}
        role="button"
        className="about-item__cta"
        target="_blank"
      >
        {props.btn.text}
      </a>
    );
  }

  return (
    <div className={`about-item ${props.index % 2 === 0 ? 'left' : 'right'}`}>
      <img src={props.imgSrc} className="about-item__img" />
      <div className="col-md-6 about-item__content">
        <p className="about-item__title">{props.title}</p>
        <p
          className="about-item__description"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        {button}
      </div>
    </div>
  );
};

AboutItem.defaultProps = {
  title: '',
  content: '',
  imgSrc: '',
  hasBtn: false,
  floatDirection: 'left'
};

export default AboutItem;
