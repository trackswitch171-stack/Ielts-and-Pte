import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () =>
{
    const whatsappNumber = '61489926983'
    const message = 'Hi! I\'m interested in your IELTS & PTE certificate services. Can you provide more information?'

    return (
        <>
            {/* Desktop Floating Button */}
            <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex fixed bottom-8 right-8 z-40 items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-premium hover:shadow-lg transition-all duration-300 text-white text-3xl"
            >
                <FaWhatsapp />
            </motion.a>

            {/* Mobile Floating Button */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:hidden fixed bottom-6 right-6 z-40"
            >
                <motion.a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-premium text-white text-2xl"
                >
                    <FaWhatsapp />
                </motion.a>
            </motion.div>
        </>
    )
}

export default FloatingWhatsApp
