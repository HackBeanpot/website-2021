import React from 'react';

const Sponsors2021 = () => (
  <div className="container home-sponsors">
    <h2 className="home-sponsors__title">2021 Sponsors</h2>
    {/* Facebook and Khoury */}
    <div className="row">
      <a
        href="https://www.facebook.com/"
        className="col-md-3 offset-md-2 d-flex align-items-center my-xs-0 my-sm-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/facebook_2133px.png"
          alt="Facebook logo"
        />
      </a>
      <a
        href="https://www.khoury.northeastern.edu/"
        className="col-md-6 offset-md-1 d-flex align-items-center my-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/khoury_1304px.png"
          alt="Khoury logo"
        />
      </a>
    </div>
    
    {/* In-Kind Sponsors */}
    <h2 className="text-center">In-Kind Sponsors</h2>
    <div className="row">
      <a
        href="https://www.badabeansnacks.com/"
        className="col-md-4 offset-md-4 d-flex align-items-center my-xs-0 my-sm-3 w-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/badabeanbadaboom_1500px.png"
          alt="Facebook logo"
        />
      </a>
    </div>
  </div>
);

export default Sponsors2021;