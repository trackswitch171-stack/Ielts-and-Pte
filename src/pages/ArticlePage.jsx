import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function ArticlePage({ title, description, keywords, intro, sections, relatedLinks })
{
    return (
        <>
            <SEOHead title={title} description={description} keywords={keywords} />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-effect rounded-3xl p-8 md:p-10"
                    >
                        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">Article</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-lg text-muted leading-relaxed mb-8">{intro}</p>

                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <section key={index}>
                                    <h2 className="text-2xl font-semibold text-white mb-3">{section.heading}</h2>
                                    <p className="text-muted leading-relaxed">{section.body}</p>
                                </section>
                            ))}
                        </div>
                    </motion.article>

                    <aside className="space-y-6">
                        <div className="glass-effect rounded-3xl p-6">
                            <h2 className="text-xl font-semibold text-white mb-4">Related Articles</h2>
                            <div className="space-y-3">
                                {relatedLinks.map((link) => (
                                    <Link key={link.href} to={link.href} className="block rounded-xl border border-white/10 bg-slate-900/60 p-3 text-muted hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="glass-effect rounded-3xl p-6">
                            <h2 className="text-xl font-semibold text-white mb-4">Need help?</h2>
                            <p className="text-muted mb-4">Contact us on WhatsApp for quick guidance about IELTS, PTE, score upgrades, or preparation support.</p>
                            <a href="https://wa.me/61489926983?text=Hi%20I%20need%20help%20with%20IELTS%20and%20PTE%20guidance" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                                Contact Us
                            </a>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
