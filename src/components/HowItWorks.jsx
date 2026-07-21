import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () =>
{
    const steps = [
        {
            id: 1,
            title: 'Fill Out Form',
            description: 'Complete our secure online form with your details.',
            icon: '📝',
        },
        {
            id: 2,
            title: 'Verification',
            description: 'Our team verifies your information and processes your request.',
            icon: '✅',
        },
        {
            id: 3,
            title: 'Processing',
            description: 'Certificate is generated and prepared for delivery.',
            icon: '⚙️',
        },
        {
            id: 4,
            title: 'Delivery',
            description: 'Receive your certificate securely within 48 hours.',
            icon: '📦',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section id="how-it-works" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">How It Works</h2>
                    <p className="section-subtitle mx-auto">
                        Simple, transparent, and secure process from start to finish
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative"
                >
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <motion.div key={step.id} variants={stepVariants} className="relative">
                                    {/* Timeline Node */}
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                                    >
                                        <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center text-3xl border-2 border-orange-500 border-opacity-30 hover:border-opacity-100 transition-all duration-300">
                                            {step.icon}
                                        </div>
                                    </motion.div>

                                    {/* Step Number */}
                                    <div className="flex justify-center mb-12">
                                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {step.id}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-effect p-6 rounded-lg text-center"
                                    >
                                        <h3 className="text-lg font-bold mb-2 text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {/* Connector Line */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                variants={stepVariants}
                                className="relative pl-16"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 top-0">
                                    <div className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl border-2 border-orange-500 border-opacity-30">
                                        {step.icon}
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-orange-500 to-transparent" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="glass-effect p-6 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                            {step.id}
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted mb-6">
                        Ready to get started? Join thousands of satisfied customers.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/61489926983?text=Hi%20I%20want%20to%20start%20my%20certificate%20order"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                    >
                        Start Your Order Now
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorks
