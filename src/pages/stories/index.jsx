import React, { Fragment } from 'react';

import Stories from 'pages/stories/components/stories';

class StoriesPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="stories-welcome container">
          <div className="stories__title">We've got stories to share</div>
            <div className="row">
              <div className="stories__description col-md-8">
                Whether you're an attendee, mentor, or an organizer, you'll come
                to HackBeanpot with a story to tell. <br /> Here's a collection of
                stories of previous attendees. Our hackers are our priority and we
                aim to have everyone walk out with stories as unique and inspiring
                as these!
              </div>
            </div>
          <Stories />
        </div>

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
                  src="http://tools.hackbeanpot.com/assets/images/team.jpg"
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
