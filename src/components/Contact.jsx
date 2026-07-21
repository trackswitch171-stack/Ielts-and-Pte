import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        certificate: '',
    })

    const handleChange = (e) =>
    {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const message = `Hi! I'm ${formData.name} (${formData.email}). I'm interested in the ${formData.certificate} certificate service.`
        const whatsappUrl = `https://wa.me/61489926983?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    const contactMethods = [
        {
            id: 1,
            icon: FaWhatsapp,
            title: 'WhatsApp',
            value: '+61 489 926 983',
            link: 'https://wa.me/61489926983',
            color: 'text-green-400',
        },
        {
            id: 2,
            icon: FiMail,
            title: 'Email',
            value: 'ieltsptepro@gmail.com',
            link: 'https://wa.me/61489926983?text=Hi%20I%20have%20a%20question%20about%20your%20certificate%20service',
            color: 'text-blue-400',
        },
        {
            id: 3,
            icon: FiPhone,
            title: 'Phone',
            value: '+61 489 926 983',
            link: 'https://wa.me/61489926983?text=Hi%20I%20want%20to%20call%20about%20my%20certificate%20order',
            color: 'text-purple-400',
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">Get In Touch</h2>
                    <p className="section-subtitle mx-auto">
                        Ready to get started? Contact us now for a quick consultation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left - Contact Methods */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold mb-8 text-white"
                        >
                            Contact Information
                        </motion.h3>

                        <motion.div variants={containerVariants} className="space-y-6">
                            {contactMethods.map((method) => (
                                <motion.a
                                    key={method.id}
                                    variants={itemVariants}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    className="glass-effect p-6 rounded-lg hover:border-orange-500 hover:border-opacity-30 transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                                >
                                    <method.icon className={`text-3xl ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">
                                            {method.title}
                                        </h4>
                                        <p className="text-muted text-sm group-hover:text-white transition-colors duration-300">
                                            {method.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 glass-effect p-6 rounded-lg"
                        >
                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-orange-400 text-xl mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Available 24/7
                                    </h4>
                                    <p className="text-muted text-sm">
                                        We're always online to help you. Response time: Under 5 minutes.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <label className="block text-white font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-muted focus:outline-none focus:border-orange-500 focus:border-opacity-50 transition-all duration-300"
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                <label className="block text-white font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-muted focus:outline-none focus:border-orange-500 focus:border-opacity-50 transition-all duration-300"
                                />
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <label className="block text-white font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg text-white placeholder-muted focus:outline-none focus:border-orange-500 focus:border-opacity-50 transition-all duration-300"
                                />
                            </motion.div>

                            {/* Certificate Type */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                            >
                                <label className="block text-white font-semibold mb-2">
                                    Certificate Type
                                </label>
                                <select
                                    name="certificate"
                                    value={formData.certificate}
                                    onChange={handleChange}
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:border-opacity-50 transition-all duration-300"
                                >
                                    <option value="" disabled>
                                        Select a certificate
                                    </option>
                                    <option value="IELTS">IELTS Certificate</option>
                                    <option value="PTE">PTE Certificate</option>
                                    <option value="Both">Both IELTS & PTE</option>
                                </select>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 mt-8"
                            >
                                <FaWhatsapp className="text-lg" />
                                Continue on WhatsApp
                            </motion.button>
                        </form>

                        {/* Privacy Note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-xs text-muted text-center mt-4"
                        >
                            Your information is completely secure and will never be shared.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
