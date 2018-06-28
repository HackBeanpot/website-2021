import React from 'react';
import Link from 'gatsby-link';
import FAQItem from '../components/FAQItem'
import MailingListPrompt from '../components/MailingListPrompt'

const App = () => (
    <div>
        <div style={{ height: '100vh' }}>
            <div>
                <img
                    src="https://hackbeanpot.com/img/solid_logo.png"
                    height="75%"
                    width="50%"
                    style={{ float: 'left' }}
                />
            </div>

            <div>
                <h3>
                    An independently-run Boston hackathon
                    <br />
                    for curious students, hackers, makers, and beginners.
                </h3>
                <h1>
                    Come learn and build with us
                    <br />
                    February 9-11th 2019
                    <br />
                    @ Genuine HQ
                </h1>
                <MailingListPrompt />
                <span>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              height="50px"
              width="50px"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              height="50px"
              width="50px"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              height="50px"
              width="50px"
          />
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
              height="50px"
              width="50px"
          />
        </span>
            </div>
        </div>
        <div>
            <h2>HackBeanpot is about...</h2>
            <div style={{ clear: 'both' }}>
                {/* Probably make this into a component*/}
                <img
                    src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
                    height="40%"
                    width="40%"
                    style={{ float: 'left' }}
                />
                <h3>The stories</h3>
                <h4>Stories subtext</h4>
                <Link to={'/stories'}>Link to stories</Link>
            </div>
            <div style={{ clear: 'both' }}>
                {/* Probably make this into a component*/}
                <img
                    src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
                    height="40%"
                    width="40%"
                    style={{ float: 'right' }}
                />
                <h3>The projects</h3>
                <h4>Projects subtext</h4>
            </div>
            <div style={{ clear: 'both' }}>
                {/* Probably make this into a component*/}
                <img
                    src="https://hackbeanpot.com/img/wmud/IMG_0299.jpg"
                    height="40%"
                    width="40%"
                    style={{ float: 'left' }}
                />
                <h3>The people</h3>
                <h4>People subtext</h4>
            </div>
        </div>
        <div style={{ clear: 'both', background: '#d3d3d3' }}>
            <h2>Frequently Asked Questions</h2>
            <FAQItem />
            <FAQItem />
            <FAQItem />
        </div>
        <div>
            <h2>2019 Sponsors</h2>
            <div>
                <img
                    src="https://www.freelogodesign.org/img/logo-ex-5.png"
                    height="20%"
                    width="20%"
                />
                <img
                    src="https://www.freelogodesign.org/img/logo-ex-5.png"
                    height="20%"
                    width="20%"
                />
                <img
                    src="https://www.freelogodesign.org/img/logo-ex-5.png"
                    height="20%"
                    width="20%"
                />
            </div>
        </div>
    </div>
);

export default App;
