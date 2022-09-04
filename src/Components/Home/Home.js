import React from 'react';
import About from '../About/About';
import HeroArea from '../HeroArea/HeroArea';
import HeroArea2 from '../HeroArea2/HeroArea2';
import Quiz2 from '../Quiz2/Quiz2';

const Home = () => {
    return (
        <div>
            <HeroArea2></HeroArea2>
            <About></About>
            {/* <HeroArea></HeroArea> */}
            {/* <HeroArea></HeroArea> */}
            <Quiz2></Quiz2>
        </div>
    );
};

export default Home;