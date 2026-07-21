import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: 'No need to take the exam',
      description: 'Skip test anxiety, prep time, and repeated exam attempts. Get a valid certificate with secure support.',
    },
    {
      id: 2,
      title: 'Save time & effort',
      description: 'Avoid months of preparation and scheduling issues. Move faster toward visas, admissions, and job offers.',
    },
    {
      id: 3,
      title: 'Fast & hassle-free processing',
      description: 'Receive fast certificate delivery with clear communication and premium handling every step of the way.',
    },
    {
      id: 4,
      title: 'Globally accepted & verifiable',
      description: 'Our certificates are accepted worldwide and come with verification support for institutions and employers.',
    },
    {
      id: 5,
      title: 'Suitable for work & immigration purposes',
      description: 'Meet immigration, visa, and job requirements quickly with the right English certificate for your goals.',
    },
    {
      id: 6,
      title: 'Stress-free & confidential process',
      description: 'Your personal information is protected and handled discreetly by a professional, secure team.',
    },
    {
      id: 7,
      title: 'Get your desired score easily',
      description: 'Choose the valid score you need without the uncertainty of an actual exam result.',
    },
    {
      id: 8,
      title: 'No risk of failure',
      description: 'Avoid exam failures entirely and move forward with confidence using a verified certificate.',
    },
  ]

  return (
    <section id="advantages" className="py-20 md:py-28 bg-[#050816] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-3">Advantages of buying IELTS or PTE online</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">Why customers choose our service over the exam route</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="glass-effect p-6 rounded-3xl border border-white border-opacity-10 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 bg-opacity-10 text-orange-300 flex items-center justify-center">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages
