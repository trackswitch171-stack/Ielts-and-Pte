import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

export default function HeroSection()
{
  return (
    <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <Shield size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 5000+ clients worldwide</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6"
            >
              Get Genuine{' '}
              <span className="text-gradient">IELTS & PTE</span> Certificates
              <br />
              <span className="text-2xl sm:text-3xl text-muted">Fast & Secure</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted mb-8 leading-relaxed"
            >
              Trusted worldwide service with fast processing and confidential handling. Join thousands of satisfied customers who achieved their dreams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/61489926983?text=Hi%20I%27m%20ready%20to%20get%20started%20with%20a%20certificate%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/61489926983?text=Hi%20I%20need%20help%20with%20IELTS%20certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary hover:bg-primary/10 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact on WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Clock, label: '24/7 Support', desc: 'Round the clock assistance' },
                { icon: Shield, label: 'Secure', desc: '100% Confidential' },
                { icon: Globe, label: 'Global', desc: 'Worldwide Recognized' },
              ].map((signal, idx) => (
                <div key={idx} className="glass p-4 rounded-lg text-center hover:bg-card-dark/50 transition-all">
                  <signal.icon className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-sm font-semibold text-white">{signal.label}</p>
                  <p className="text-xs text-muted">{signal.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Certificate Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Certificate Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="glass border border-primary/30 rounded-2xl p-8 backdrop-blur-xl">
                {/* Certificate Design */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 text-center border-4 border-yellow-800/30">
                  <div className="text-yellow-900/40 text-6xl font-poppins font-bold mb-4">✓</div>
                  <h3 className="text-2xl font-poppins font-bold text-yellow-900 mb-2">Certificate of Achievement</h3>
                  <p className="text-yellow-800/70 mb-4">IELTS International English Language Testing System</p>
                  <div className="border-t border-yellow-800/20 pt-4 mt-4">
                    <p className="text-sm text-yellow-800/60">Score: Band 8.5</p>
                    <p className="text-sm text-yellow-800/60">Valid for 2 Years</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center border-4 border-navy shadow-lg">
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">8.5</p>
                    <p className="text-white text-xs">Score</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-12 -right-12 w-32 h-32 border border-primary/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-8 -left-8 w-40 h-40 border border-accent/20 rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
