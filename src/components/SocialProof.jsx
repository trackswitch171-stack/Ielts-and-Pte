import React from 'react'
import { motion } from 'framer-motion'

const SocialProof = () =>
{
    const logos = [
        { name: 'Oxford University', color: 'from-blue-400 to-blue-600' },
        { name: 'Cambridge UK', color: 'from-purple-400 to-purple-600' },
        { name: 'Top Universities', color: 'from-pink-400 to-pink-600' },
        { name: 'Global Partners', color: 'from-green-400 to-green-600' },
    ]

    return (
        <section className="py-16 md:py-20 border-t border-white border-opacity-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-muted text-sm md:text-base font-semibold mb-10 uppercase tracking-widest"
                >
                    Trusted By Leading Institutions
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {logos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center"
                        >
                            <div className="glass-effect p-6 md:p-8 rounded-lg w-full text-center hover:border-orange-500 hover:border-opacity-30 transition-all duration-300">
                                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${logo.color} rounded-lg`} />
                                <p className="text-sm md:text-base font-semibold text-white">
                                    {logo.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-orange-400">50K+</div>
                        <p className="text-sm md:text-base text-muted mt-2">Certificates Issued</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-orange-400">4.9/5</div>
                        <p className="text-sm md:text-base text-muted mt-2">Client Rating</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-orange-400">98%</div>
                        <p className="text-sm md:text-base text-muted mt-2">Satisfaction Rate</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SocialProof
