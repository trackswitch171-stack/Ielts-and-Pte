import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiShield, FiBookOpen } from 'react-icons/fi';
import SEOHead from '../components/SEOHead';

export default function ServicePage({
    title,
    description,
    keywords,
    intro,
    highlights,
    processSteps,
    ctaLabel,
    ctaHref,
})
{
    const featureCards = [
        {
            icon: FiShield,
            title: 'Secure & discreet',
            text: 'Private communication and transparent support throughout the process.',
        },
        {
            icon: FiClock,
            title: 'Fast assistance',
            text: 'Get quick help for urgent applications, requests, and document needs.',
        },
    ];

    return (
        <>
            <SEOHead title={title} description={description} keywords={keywords} />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                            <div>
                                <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">Service Page</p>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h1>
                                <p className="text-lg text-muted leading-relaxed mb-6">{intro}</p>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={ctaHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        {ctaLabel}
                                    </a>
                                    <Link to="/upgrade-scores" className="btn-secondary">
                                        Upgrade my score
                                    </Link>
                                </div>
                            </div>
                            <div className="glass rounded-2xl p-6 border border-white/10">
                                <h2 className="text-xl font-semibold text-white mb-4">Why students choose this service</h2>
                                <ul className="space-y-3">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-muted">
                                            <FiCheckCircle className="text-orange-400 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <section className="mt-10 grid md:grid-cols-2 gap-6">
                        {featureCards.map((card, index) =>
                        {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass-effect rounded-2xl p-6"
                                >
                                    <Icon className="text-orange-400 text-2xl mb-3" />
                                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                                    <p className="text-muted">{card.text}</p>
                                </motion.div>
                            );
                        })}
                    </section>

                    <section className="mt-10 glass-effect rounded-3xl p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-white mb-6">How the process works</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {processSteps.map((step, index) => (
                                <div key={step} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                                    <p className="text-orange-400 font-semibold mb-2">Step {index + 1}</p>
                                    <p className="text-muted">{step}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-10 grid md:grid-cols-3 gap-6">
                        <Link to="/services/pte" className="glass-effect rounded-2xl p-6 hover:border-orange-500 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">PTE Certificate</h3>
                            <p className="text-muted">Explore our PTE support options and trusted pathways.</p>
                        </Link>
                        <Link to="/services/bundle" className="glass-effect rounded-2xl p-6 hover:border-orange-500 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">Express Bundle</h3>
                            <p className="text-muted">Get both IELTS and PTE support in one package.</p>
                        </Link>
                        <Link to="/buy-pte-questions-and-answers" className="glass-effect rounded-2xl p-6 hover:border-orange-500 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">Buy PTE Questions & Answers</h3>
                            <p className="text-muted">Access preparation materials designed for focused study.</p>
                        </Link>
                    </section>
                </div>
            </main>
        </>
    );
}
