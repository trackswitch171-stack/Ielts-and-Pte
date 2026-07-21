import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const Services = () =>
{
    const services = [
        {
            id: 1,
            title: 'IELTS Certificate',
            description: 'Get your IELTS certificate fast and securely. Accepted by universities worldwide.',
            features: [
                'Genuine certificate',
                'Worldwide recognition',
                'Lifetime validity',
                'Express delivery',
                'Document verification',
            ],
            icon: '📚',
            accent: 'from-blue-500 to-blue-600',
        },
        {
            id: 2,
            title: 'PTE Certificate',
            description: 'Professional English certification recognized globally. Quick processing guaranteed.',
            features: [
                'Official PTE scores',
                'Global acceptance',
                'No waiting periods',
                'Fast verification',
                'Lifetime access',
            ],
            icon: '🎓',
            accent: 'from-purple-500 to-purple-600',
            featured: true,
        },
        {
            id: 3,
            title: 'Express Bundle',
            description: 'Both IELTS and PTE certificates in one package. Maximum savings.',
            price: '$599',
            delivery: '24 hours',
            features: [
                'Both certificates',
                'Priority processing',
                'Extra support',
                'Fastest delivery',
                'Best value',
            ],
            icon: '⚡',
            accent: 'from-orange-500 to-orange-600',
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

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section id="services" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Our Services</h2>
                    <p className="section-subtitle mx-auto">
                        Choose the perfect certificate package for your needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className={`relative glass-effect p-8 rounded-lg transition-all duration-300 ${service.featured ? 'md:scale-105 border-orange-500 border-opacity-50' : ''
                                }`}
                        >
                            {/* Featured Badge */}
                            {service.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="text-4xl mb-4">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <FiCheck className="text-orange-400 flex-shrink-0" />
                                        <span className="text-sm text-muted">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`https://wa.me/61489926983?text=${encodeURIComponent(`Hi! I'm interested in the ${service.title} service.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3 rounded-base font-semibold transition-all duration-300 ${service.featured
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-premium'
                                        : 'glass-effect text-white hover:bg-white hover:bg-opacity-10'
                                    }`}
                            >
                                Get Started
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services
