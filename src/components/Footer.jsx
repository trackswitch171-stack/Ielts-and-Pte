import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

const Footer = () =>
{
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        {
            title: 'Product',
            links: ['IELTS Certificate', 'PTE Certificate', 'Bundle Package', 'Pricing'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Blog', 'Careers', 'Press'],
        },
        {
            title: 'Support',
            links: ['Help Center', 'Contact Us', 'FAQ', 'Status'],
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
        },
    ]

    const socialLinks = [
        { icon: FaWhatsapp, url: 'https://wa.me/61489926983', label: 'WhatsApp' },
        { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
        { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
        { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    ]

    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="border-t border-white border-opacity-10 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-2 md:col-span-1"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">IP</span>
                            </div>
                            <span className="text-white font-bold text-lg">IELTS Pro</span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                            Get genuine IELTS & PTE certificates fast and secure. Trusted by students worldwide.
                        </p>
                    </motion.div>

                    {/* Links Columns */}
                    {footerLinks.map((column, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-4 text-sm">
                                {column.title}
                            </h3>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a
                                            href="#"
                                            className="text-muted hover:text-orange-400 transition-colors duration-300 text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white border-opacity-10 py-12" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-muted text-sm mb-6 md:mb-0"
                    >
                        © {currentYear} IELTS Pro. All rights reserved. We are not affiliated with IELTS, PTE, or any official examination bodies. For official information, please visit their official websites.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-6 mb-6 md:mb-0"
                    >
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                className="text-muted hover:text-orange-400 transition-colors duration-300"
                            >
                                <social.icon className="text-lg" />
                            </motion.a>
                        ))}

                        {/* Scroll to Top */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={scrollToTop}
                            className="ml-4 p-2 glass-effect rounded-lg text-orange-400 hover:border-orange-500 border border-opacity-0 hover:border-opacity-100 transition-all duration-300"
                        >
                            <FiArrowUp className="text-lg" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
