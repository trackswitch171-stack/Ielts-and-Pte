import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiAward } from 'react-icons/fi'

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
                    <h2 className="section-title mb-4">Student Success Stories</h2>
                    <p className="section-subtitle mx-auto">
                        Real stories from real customers who achieved their goals with IELTS & PTE
                    </p>
                </motion.div>

                {/* Featured Success Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-effect rounded-3xl p-8 md:p-12 mb-16 border-2 border-orange-500 border-opacity-30"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/Achieve Your Goals_ IELTS Coaching in Jaipur.jpg"
                                    alt="IELTS Student Success - Graduate with IELTS certificate and UK flag"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20 blur-2xl"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <FiAward className="text-orange-400 text-2xl" />
                                <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">Success Story</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Emily Roberts Achieved Her UK University Dream
                            </h3>

                            <p className="text-muted text-lg leading-relaxed mb-6">
                                "I needed an IELTS certificate for my Master's program at a top UK university. Thanks to this service, I got my certificate in just 2 days with a perfect 8.5 band score. The process was smooth, confidential, and the customer support was exceptional. I'm now happily studying in the UK!"
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="glass-effect rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-400">8.5</div>
                                    <div className="text-sm text-muted">IELTS Score</div>
                                </div>
                                <div className="glass-effect rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-400">48h</div>
                                    <div className="text-sm text-muted">Processing</div>
                                </div>
                                <div className="glass-effect rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-400">100%</div>
                                    <div className="text-sm text-muted">Verified</div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className="text-orange-400 fill-orange-400"
                                            size={20}
                                        />
                                    ))}
                                </div>
                                <span className="text-muted">5.0 out of 5</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">More Happy Customers</h3>
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
                </div>

                {/* Additional CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16 glass-effect rounded-2xl p-8"
                >
                    <p className="text-lg text-muted mb-4">
                        Join thousands of satisfied customers worldwide. Your success story could be next!
                    </p>
                    <a
                        href="https://wa.me/61489926983?text=Hi%20I%20want%20to%20get%20started%20with%20my%20IELTS%20or%20PTE%20certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block btn-primary"
                    >
                        Start Your Success Story
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
