import React from 'react';
import Hero from '../components/Hero';
import LogoReel from '../components/LogoReel';
import ValueProps from '../components/ValueProps';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <LogoReel />
            <ValueProps />
            <Testimonials />
            <ContactForm />
        </main>
    );
};

export default Home;
