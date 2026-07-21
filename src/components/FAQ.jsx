import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () =>
{
    const [activeId, setActiveId] = useState(1)

    const faqs = [
        {
            id: 1,
            question: 'Are these certificates genuine and accepted worldwide?',
            answer: 'Yes, all our certificates are genuine, verified, and accepted by 195+ countries including universities and employers globally. They carry the same weight as original certificates.',
        },
        {
            id: 2,
            question: 'How long does it take to receive my certificate?',
            answer: 'Our standard delivery time is 48 hours. We also offer express delivery in 24 hours. Once your order is placed, you can track the status in real-time through your dashboard.',
        },
        {
            id: 3,
            question: 'Is my information completely confidential?',
            answer: 'Absolutely. We use military-grade encryption and follow strict data protection protocols. Your information is never shared with third parties. We prioritize your privacy above all else.',
        },
        {
            id: 4,
            question: 'What if I need help or have questions?',
            answer: 'Our 24/7 customer support team is always available through WhatsApp, email, and phone. We respond within minutes to ensure all your concerns are addressed.',
        },
        {
            id: 5,
            question: 'Can I get both IELTS and PTE certificates?',
            answer: 'Yes! We offer a bundle package that includes both IELTS and PTE certificates. It\'s cost-effective and saves you time compared to ordering separately.',
        },
        {
            id: 6,
            question: 'What payment methods do you accept?',
            answer: 'We accept all major payment methods including credit cards, debit cards, bank transfers, and digital wallets. All transactions are secure and encrypted.',
        },
    ]

    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Frequently Asked Questions</h2>
                    <p className="section-subtitle mx-auto">
                        Everything you need to know about our service
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="glass-effect rounded-lg overflow-hidden hover:border-orange-500 hover:border-opacity-30 transition-all duration-300"
                        >
                            {/* Question */}
                            <button
                                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-4 md:px-8 md:py-6 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
                            >
                                <span className="text-left font-semibold text-white text-sm md:text-base">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 flex-shrink-0"
                                >
                                    {activeId === faq.id ? (
                                        <FiMinus className="text-orange-400 text-xl" />
                                    ) : (
                                        <FiPlus className="text-orange-400 text-xl" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <AnimatePresence>
                                {activeId === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t border-white border-opacity-10"
                                    >
                                        <p className="px-6 py-4 md:px-8 md:py-6 text-muted leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Help */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center glass-effect p-8 rounded-lg border-orange-500 border-opacity-20"
                >
                    <h3 className="text-xl font-bold mb-2 text-white">Still have questions?</h3>
                    <p className="text-muted mb-6">
                        Our support team is ready to help. Contact us anytime!
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://wa.me/61489926983?text=Hi%20I%20have%20questions%20about%20your%20service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block btn-primary"
                    >
                        Chat with us on WhatsApp
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
