import React from 'react';

import DaytimeScene from 'images/svg/daytime-scene.jsx';

const Welcome = () => (
    <section className="header">
        <div className="container header__content">
            <h1 className="header__title">HackBeanpot will be back!</h1>
            <h2 className="header__event-date">February 19-21, 2021</h2>
            <p className="header__description">Join us for our upcoming virtual hackathon!</p>
            <a
                className="header__cta"
                href=""
                role="button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Stay up to date
            </a>
        </div>
        <div className="header__skyline">
            <DaytimeScene />
        </div>
    </section>
);

export default Welcome;