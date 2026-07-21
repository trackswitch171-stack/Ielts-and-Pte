import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function BuyPteQuestionsPage()
{
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const message = `Hi! I want to buy PTE questions and answers. Email: ${email || 'N/A'}`;
        window.open(`https://wa.me/61489926983?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <SEOHead
                title="Buy PTE Questions and Answers"
                description="Buy PTE questions and answers for focused preparation, practice, and exam readiness with trusted support."
                keywords="buy PTE questions and answers, PTE practice materials, PTE exam questions"
            />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-effect rounded-3xl p-8"
                    >
                        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">PTE Prep Materials</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Buy PTE questions and answers for better preparation</h1>
                        <p className="text-lg text-muted leading-relaxed mb-6">
                            Prepare more strategically with high-value PTE practice questions and answers that help you understand the format, improve confidence, and target weaker areas.
                        </p>
                        <ul className="space-y-3 text-muted">
                            <li>• Structured practice materials for speaking, writing, reading, and listening</li>
                            <li>• Useful resources for improving score confidence before your exam</li>
                            <li>• Fast support for secure delivery and follow-up questions</li>
                        </ul>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-effect rounded-3xl p-8"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-4">Request your package</h2>
                        <p className="text-muted mb-6">Leave your email and we will send the next steps on WhatsApp.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white" placeholder="Enter your email" />
                            <button type="submit" className="btn-primary w-full justify-center">Request PTE materials</button>
                        </form>
                    </motion.section>
                </div>
            </main>
        </>
    );
}
