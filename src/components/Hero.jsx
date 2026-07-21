import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () =>
{
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-2 bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20 rounded-full text-orange-400 text-sm font-semibold mb-6">
                                🎯 Trusted Since 2018
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight"
                        >
                            Get Genuine
                            <span className="gradient-text"> IELTS & PTE </span>
                            Certificates
                            <span className="gradient-text"> Fast & Secure</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted mb-8 leading-relaxed"
                        >
                            Trusted worldwide service with fast processing and confidential handling. Get your certificate in as little as 48 hours. Accepted by universities and employers globally.
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            <div className="glass-effect p-4 rounded-base">
                                <div className="text-2xl font-bold text-orange-400">24/7</div>
                                <div className="text-sm text-muted">Customer Support</div>
                            </div>
                            <div className="glass-effect p-4 rounded-base">
                                <div className="text-2xl font-bold text-orange-400">48h</div>
                                <div className="text-sm text-muted">Fast Processing</div>
                            </div>
                            <div className="glass-effect p-4 rounded-base">
                                <div className="text-2xl font-bold text-orange-400">195+</div>
                                <div className="text-sm text-muted">Countries Accepted</div>
                            </div>
                            <div className="glass-effect p-4 rounded-base">
                                <div className="text-2xl font-bold text-orange-400">100%</div>
                                <div className="text-sm text-muted">Confidential</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/61489926983?text=Hi%20I%20want%20to%20know%20more%20about%20IELTS%20and%20PTE%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 btn-primary"
                            >
                                <FaWhatsapp className="text-xl" />
                                Chat on WhatsApp
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/61489926983?text=Hi%20I%27d%20like%20more%20information%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 btn-secondary"
                            >
                                Learn More
                                <FiArrowRight />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Side - IELTS Student Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/Online IELTS Course for Beginners.jpg"
                                    alt="IELTS Student with global flags - Australia, Canada, UK, France, USA, Germany"
                                    className="w-full h-auto object-cover rounded-3xl"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20 blur-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
