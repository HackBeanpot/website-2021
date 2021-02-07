import React from 'react';

const Sponsors2021 = () => (
  <section id="sponsors" className="home-sponsors">
    <div className="container">
      <h2 className="home-sponsors__title">2021 Sponsors</h2>
      {/* Drift */}
      <div className="row">
        <a
          href=""
          className="col-md-6 offset-md-6 center home-sponsors__logo-wrapper my-sm-3 mx-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/drift.png"
            alt="Facebook logo"
          />
        </a>
      </div>

      {/* Facebook and Khoury */}
      <div className="row">
        <a
          href="https://www.facebook.com/"
          className="col-md-3 offset-md-2 home-sponsors__logo-wrapper my-sm-3 mx-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/facebook_2133px.png"
            alt="Facebook logo"
          />
        </a>
        <a
          href="https://www.khoury.northeastern.edu/"
          className="col-md-6 offset-md-1 home-sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/khoury_1304px.png"
            alt="Khoury logo"
          />
        </a>
      </div>

      
      {/* PowerAdvocate and Upstatement */}
      <div className="row">
        <a
          href=""
          className="col-md-5 home-sponsors__logo-wrapper my-sm-3 mx-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/poweradvocate.png"
            alt="Power Advocate logo"
          />
        </a>
        <a
          href=""
          className="col-md-5 home-sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/upstatment.png"
            alt="Upstatement logo"
          />
        </a>
      </div>
      
      {/* In-Kind Sponsors */}
      <h2 className="home-sponsors__subtitle">In-Kind Sponsors</h2>
      <div className="row">
        <div className="col-md-2"></div>
        <a
          href="https://www.badabeansnacks.com/"
          className="col home-sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/badabeanbadaboom_1500px.png"
            alt="Facebook logo"
          />
        </a>
        <a
          href="https://www.joinglimpse.com/"
          className="col home-sponsors__logo-wrapper my-sm-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="home-sponsors__logo"
            src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/glimpse.png"
            alt="Facebook logo"
          />
        </a>
        <div className="col-md-2"></div>
      </div>
    </div>
  </section>
);

export default Sponsors2021;