import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'IELTS', href: '/services/ielts' },
        { name: 'PTE', href: '/services/pte' },
        { name: 'Upgrade Scores', href: '/upgrade-scores' },
        { name: 'Buy PTE Q&A', href: '/buy-pte-questions-and-answers' },
        { name: 'Articles', href: '/articles' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 glass border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-poppins font-bold text-lg">CP</span>
                        </div>
                        <span className="hidden sm:block text-white font-poppins font-bold text-lg">
                            CertifyPro
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-white hover:text-primary transition-colors duration-300 text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://wa.me/61489926983?text=Hi%20I%20want%20to%20know%20more%20about%20IELTS%20and%20PTE%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-lg transition-all duration-300 ${isOpen
                                    ? 'bg-orange-500 text-white'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden pb-4 border-t border-white/10"
                    >
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 rounded-lg text-white hover:text-primary hover:bg-orange-500 hover:bg-opacity-20 transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                href="https://wa.me/61489926983?text=Hi%20I%20want%20to%20know%20more%20about%20IELTS%20and%20PTE%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Now
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
