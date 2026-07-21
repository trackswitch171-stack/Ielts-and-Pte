import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import Advantages from '../components/Advantages';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';

export default function HomePage()
{
    return (
        <>
            <SEOHead
                title="IELTS & PTE Certificate Services"
                description="Get trusted IELTS and PTE certificate support, fast processing, score upgrade assistance, and PTE question solutions for students worldwide."
                keywords="IELTS certificate, PTE certificate, buy IELTS certificate, PTE score upgrade, IELTS score upgrade"
            />
            <main className="bg-secondary min-h-screen">
                <Hero />
                <SocialProof />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <Comparison />
                <Advantages />
                <Statistics />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
        </>
    );
}
