import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const articles = [
    {
        title: 'How to Verify a PTE Certificate',
        slug: '/articles/how-to-verify-a-pte-certificate',
        description: 'Learn the practical steps to verify a PTE certificate and understand what to check before relying on it.',
    },
    {
        title: 'PTE vs IELTS',
        slug: '/articles/pte-vs-ielts',
        description: 'Compare PTE and IELTS to understand which exam may suit your academic or migration goals better.',
    },
    {
        title: 'Common IELTS Mistakes',
        slug: '/articles/common-ielts-mistakes',
        description: 'See the most common IELTS mistakes and how to avoid them before your test day.',
    },
    {
        title: 'How Long Does PTE Take',
        slug: '/articles/how-long-does-pte-take',
        description: 'Get a clear overview of PTE test timing, result turnaround, and what to expect overall.',
    },
    {
        title: 'Everything About PTE Certificates',
        slug: '/articles/everything-about-pte-certificates',
        description: 'Understand what PTE certificates involve, how they are used, and what students should know.',
    },
    {
        title: 'IELTS Preparation Guide',
        slug: '/articles/ielts-preparation-guide',
        description: 'A practical IELTS preparation guide covering planning, practice, and exam-day readiness.',
    },
    {
        title: 'Understanding PTE Scores',
        slug: '/articles/understanding-pte-scores',
        description: 'Learn how PTE scoring works and what different score bands usually mean in practice.',
    },
    {
        title: 'Latest IELTS Updates',
        slug: '/articles/latest-ielts-updates',
        description: 'Stay informed about recent IELTS updates and changes that may affect preparation and planning.',
    },
];

export default function ArticlesHubPage()
{
    return (
        <>
            <SEOHead
                title="IELTS and PTE Articles"
                description="Explore helpful articles about PTE certificates, IELTS preparation, score understanding, and exam updates."
                keywords="IELTS articles, PTE articles, how to verify PTE certificate, PTE vs IELTS"
            />
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass-effect rounded-3xl p-8 md:p-10 mb-8">
                        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">Knowledge Center</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IELTS & PTE Articles</h1>
                        <p className="text-lg text-muted leading-relaxed">Explore practical guides and explainers designed to help students understand certification, preparation, and score-related topics.</p>
                    </motion.section>

                    <div className="grid md:grid-cols-2 gap-6">
                        {articles.map((article, index) => (
                            <motion.div key={article.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-effect rounded-2xl p-6">
                                <h2 className="text-xl font-semibold text-white mb-3">{article.title}</h2>
                                <p className="text-muted leading-relaxed mb-4">{article.description}</p>
                                <Link to={article.slug} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                                    Read article →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
