import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Counter = ({ end, duration = 2 }) =>
{
    const [count, setCount] = useState(0)

    useEffect(() =>
    {
        let current = 0
        const increment = end / (duration * 60)
        const interval = setInterval(() =>
        {
            current += increment
            if (current < end)
            {
                setCount(Math.ceil(current))
            } else
            {
                setCount(end)
                clearInterval(interval)
            }
        }, 1000 / 60)

        return () => clearInterval(interval)
    }, [end, duration])

    return count
}

const Statistics = () =>
{
    const stats = [
        {
            id: 1,
            number: 50,
            suffix: 'K+',
            label: 'Certificates Issued',
            icon: '📜',
        },
        {
            id: 2,
            number: 195,
            suffix: '+',
            label: 'Countries Served',
            icon: '🌍',
        },
        {
            id: 3,
            number: 98,
            suffix: '%',
            label: 'Success Rate',
            icon: '✨',
        },
        {
            id: 4,
            number: 24,
            suffix: '/7',
            label: 'Customer Support',
            icon: '💬',
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

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Our Impact</h2>
                    <p className="section-subtitle mx-auto">
                        Trusted by students and professionals worldwide
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass-effect p-8 rounded-lg text-center hover:border-orange-500 hover:border-opacity-30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>

                            {/* Number */}
                            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                                <Counter end={stat.number} />
                                {stat.suffix}
                            </div>

                            {/* Label */}
                            <p className="text-muted text-sm md:text-base font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted text-lg">
                        Join thousands of satisfied customers who have successfully obtained their certificates
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Statistics
