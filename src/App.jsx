import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Advantages from './components/Advantages'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './index.css'

function App()
{
    return (
        <div className="bg-secondary min-h-screen">
            <Navbar />
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
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default App
