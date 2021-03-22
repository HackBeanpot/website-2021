import React from 'react';

import DaytimeScene from 'images/svg/daytime-scene.jsx';

const Welcome = () => (
    <section className="header">
        <div className="container header__content">
            <h1 className="header__title">HackBeanpot 2022</h1>
            <h4 className="header__description">Sign up for our Newsletter!</h4>
            <a href='https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431' 
                role="button" 
                className="header__cta" 
                target="_blank" 
                rel="noopener noreferrer">
            Sign up Here
            </a>
        </div>
        <div className="header__skyline">
            <DaytimeScene />
        </div>
    </section>
);

export default Welcome;