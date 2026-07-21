import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiZap, FiUsers, FiLock, FiTrendingUp, FiAward } from 'react-icons/fi'

const WhyChooseUs = () =>
{
    const features = [
        {
            id: 1,
            title: 'Confidential & Secure',
            description: 'Your privacy is our priority. All information is encrypted and protected.',
            icon: FiLock,
            color: 'text-red-400',
        },
        {
            id: 2,
            title: 'Lightning Fast',
            description: 'Get your certificate in 24-48 hours, not weeks or months.',
            icon: FiZap,
            color: 'text-yellow-400',
        },
        {
            id: 3,
            title: '24/7 Support',
            description: 'Our team is always available to answer your questions and concerns.',
            icon: FiUsers,
            color: 'text-blue-400',
        },
        {
            id: 4,
            title: 'World-Class Security',
            description: 'Military-grade encryption ensures your data is completely safe.',
            icon: FiShield,
            color: 'text-green-400',
        },
        {
            id: 5,
            title: 'Global Recognition',
            description: 'Accepted by 195+ countries and top universities worldwide.',
            icon: FiTrendingUp,
            color: 'text-purple-400',
        },
        {
            id: 6,
            title: 'Industry Verified',
            description: 'Certified and verified by international education authorities.',
            icon: FiAward,
            color: 'text-orange-400',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section id="why-us" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Why Choose Us?</h2>
                    <p className="section-subtitle mx-auto">
                        Experience the difference with our premium, secure, and reliable service
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-effect p-8 rounded-lg hover:border-orange-500 hover:border-opacity-30 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <feature.icon className={`text-4xl ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Accent Line */}
                            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-12 transition-all duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
