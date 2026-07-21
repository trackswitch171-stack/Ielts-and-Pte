import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const Testimonials = () =>
{
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Student',
            location: 'USA',
            image: '👩‍🎓',
            rating: 5,
            text: 'Absolutely amazing service! Got my IELTS certificate in just 48 hours. The process was super easy and everything was confidential. Highly recommended!',
        },
        {
            id: 2,
            name: 'Ahmed Khan',
            role: 'Professional',
            location: 'UK',
            image: '👨‍💼',
            rating: 5,
            text: 'This was exactly what I needed for my job application. The team was extremely professional and helpful. Great value for money!',
        },
        {
            id: 3,
            name: 'Maria Garcia',
            role: 'Graduate Student',
            location: 'Spain',
            image: '👩‍🎓',
            rating: 5,
            text: 'Fast, reliable, and trustworthy. I got both my IELTS and PTE certificates without any issues. This service is a game-changer!',
        },
        {
            id: 4,
            name: 'James Wilson',
            role: 'Business Owner',
            location: 'Australia',
            image: '👨‍💼',
            rating: 5,
            text: 'Outstanding customer support! They answered all my questions and delivered exactly what was promised. Would definitely use again.',
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
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">What Our Clients Say</h2>
                    <p className="section-subtitle mx-auto">
                        Real stories from real customers who achieved their goals
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="glass-effect p-8 rounded-lg hover:border-orange-500 hover:border-opacity-30 transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className="text-orange-400 fill-orange-400"
                                        size={20}
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-muted mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{testimonial.image}</div>
                                <div>
                                    <h4 className="text-white font-semibold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted text-sm">
                                        {testimonial.role} · {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted mb-4">
                        Join thousands of satisfied customers. Your success story could be next!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
