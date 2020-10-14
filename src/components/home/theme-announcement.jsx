import React from 'react';

import BlueTransition from 'images/svg/blue-transition.jsx';
import Compass from 'images/svg/compass.jsx';
import SunsetScene from 'images/svg/sunset-scene.jsx';

const ThemeAnnouncement = () => (
    <section className="theme-announcement">
        <div className="theme__transition">
            <BlueTransition />
        </div>
        <div className="container">
            <div className="theme__content-wrapper">
                <div className="theme__content">
                    <p className="theme__sprout">Our theme this year is Camping!</p>
                    <p>
                        At HackBeanpot 2021, we aim to create a welcoming “campsite” 
                        by emphasizing our focus on exploration, creativity, and respect 
                        for the world around us! Camping represents community, 
                        sustainability, and the goal to help each other thrive 
                        given a set of tools.
                    </p>
                    <p>
                        Hackers can expect to put their resourcefulness to the test,
                        while sharing stories, and learning new skills from peers. 
                        So whether you're a seasoned hackathon-goer, an 
                        ‘I-have-never-written-a-line-of-code’ beginner, or someone 
                        in between, we’re excited for you to embark on this adventure with us!
                    </p>
                </div>
                <div className="theme__logo">
                    <Compass />
                </div>
            </div>
        </div>
        <div className="theme__sunset-scene">
            <SunsetScene />
        </div>
    </section>
);

export default ThemeAnnouncement;