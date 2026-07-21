import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

export default function UpgradeScoresPage()
{
    const [formData, setFormData] = useState({
        name: '',
        exam: 'IELTS',
        currentScore: '',
        targetScore: '',
        details: '',
    });

    const handleChange = (event) =>
    {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const message = `Hi! I want to upgrade my ${formData.exam} score. Name: ${formData.name || 'N/A'}; Current Score: ${formData.currentScore || 'N/A'}; Target Score: ${formData.targetScore || 'N/A'}; Details: ${formData.details || 'N/A'}`;
        window.open(`https://wa.me/61489926983?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <SEOHead
                title="Upgrade PTE or IELTS Scores"
                description="Need help upgrading your PTE or IELTS score for study, migration, or work? Send your details and get guidance quickly."
                keywords="upgrade IELTS score, upgrade PTE score, improve IELTS score, improve PTE score"
            />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-effect rounded-3xl p-8"
                    >
                        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">Score Upgrade Support</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Upgrade your IELTS or PTE score with trusted support</h1>
                        <p className="text-lg text-muted leading-relaxed mb-6">
                            Whether you need a stronger result for university admission, migration, or professional goals, our team can guide you through the fastest next steps and explain the options available.
                        </p>
                        <ul className="space-y-3 text-muted">
                            <li>• Fast consultation for IELTS and PTE score improvement</li>
                            <li>• Clear guidance for your target score and timeline</li>
                            <li>• Dedicated support through WhatsApp for quick follow-up</li>
                        </ul>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-effect rounded-3xl p-8"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-6">Share your score details</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-muted mb-2">Your name</label>
                                <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Exam type</label>
                                <select name="exam" value={formData.exam} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white">
                                    <option value="IELTS">IELTS</option>
                                    <option value="PTE">PTE</option>
                                </select>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-muted mb-2">Current score</label>
                                    <input name="currentScore" value={formData.currentScore} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white" placeholder="e.g. 6.5" />
                                </div>
                                <div>
                                    <label className="block text-sm text-muted mb-2">Target score</label>
                                    <input name="targetScore" value={formData.targetScore} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white" placeholder="e.g. 7.0" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-2">Additional details</label>
                                <textarea name="details" value={formData.details} onChange={handleChange} rows="4" className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-white" placeholder="Tell us about your goal, deadline, or any special requirements" />
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center">Send on WhatsApp</button>
                        </form>
                    </motion.section>
                </div>
            </main>
        </>
    );
}
