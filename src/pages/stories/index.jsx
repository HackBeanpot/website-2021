import React, { Fragment } from 'react';

import Stories from 'pages/stories/components/stories';

class StoriesPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* TODO: Feed in stories data */}
        <Stories />

        <div className="stories-tell-section">
          <div className="container stories-tell">
            <div className="stories-section-header">
              ... and we've got a story to tell.
            </div>

            <div className="row stories-tell-quote">
              <div className="col-md-6 stories-quote">
                In 2013, a small group of Northeastern students brought 80 students together at the Microsoft NERD
                 Center for the very first HackBeanpot, an opportunity for students to express their creativity and 
                 explore. 
                 <br/><br/> 
                 2020 marks our seventh annual event and carries forward the same mission we began with: to
                 foster a diverse community of curious students and engage them with the Boston tech community.
              </div>
              <div className="offset-md-1 col-md-5">
                <img
                  className="portrait portrait-large"
                  src="http://tools.hackbeanpot.com/assets/images/2018-hbp-candid.jpg"
                />
              </div>
            </div>
            <a
                href="mailto:team@hackbeanpot.com"
                role="button"
                className="stories-cta"
              >
                Meet our team
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StoriesPage;
