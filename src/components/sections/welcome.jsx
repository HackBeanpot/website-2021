import React from 'react';

import DaytimeScene from 'images/svg/daytime-scene.jsx';

const Welcome = () => (
    <section className="header">
        <div className="container header__content">
            <h1 className="header__title">HackBeanpot 2022</h1>
            <h4 className="header__description">Join our organizing team!</h4>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSefJBzPmcBjenKsfOmup16hra1v3XHasPsDENbx_K3CPdeUOQ/viewform' 
                role="button" 
                className="header__cta" 
                target="_blank" 
                rel="noopener noreferrer">
            Apply Here
            </a>
        </div>
        <div className="header__skyline">
            <DaytimeScene />
        </div>
    </section>
);

export default Welcome;