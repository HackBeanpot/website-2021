import React from 'react';

import DynamicLink from '../dynamic-link'
import DaytimeScene from 'images/svg/daytime-scene.jsx';

const Welcome = () => (
    <section className="header">
        <div className="container header__content">
            <h1 className="header__title">HackBeanpot will be back!</h1>
            <h2 className="header__event-date">February 19-21, 2021</h2>
            <p className="header__description">Join us for our upcoming virtual hackathon!</p>
            <DynamicLink role="button" className="header__cta" to="https://apply.hackbeanpot.com/admin/settings">
                Apply now!
            </DynamicLink>
        </div>
        <div className="header__skyline">
            <DaytimeScene />
        </div>
    </section>
);

export default Welcome;