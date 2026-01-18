import React from 'react';
import Hero from '../components/Hero';
import LogoReel from '../components/LogoReel';
import Intro from '../components/Intro';
import ValueProps from '../components/ValueProps';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <LogoReel />
            <Intro />
            <ValueProps />
            <About />
            <Testimonials />
            <ContactForm />
        </main>
    );
};

export default Home;
