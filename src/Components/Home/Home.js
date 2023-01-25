import React from 'react';
import About from './About/About';
import CarriculumPrograms from './curriculum_programs/CarriculumPrograms';
import HeroArea2 from './HeroArea2/HeroArea2';
import QuizCarousel from './quiz_carousel/QuizCarousel';
import Footer from './Footer/Footer';
import Testimonial from './Testimonial/Testimonial';
import Skills from './Skills/Skills';

const Home = () => {
    return (
      <div className="">
        <HeroArea2 />
        <QuizCarousel />
        <CarriculumPrograms />
        <About />
        <Skills />
        {/* <Testimonial/> */}
        <Footer />
      </div>
    );
};

export default Home;