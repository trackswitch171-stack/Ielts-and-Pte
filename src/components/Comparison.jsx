import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const Comparison = () =>
{
  const features = [
    { key: 'Acceptance', ielts: 'Universities & employers worldwide', pte: 'Universities & employers worldwide' },
    { key: 'Processing Time', ielts: '48 hours (typical)', pte: '48 hours (typical)' },
    { key: 'Verification', ielts: 'Official verification available', pte: 'Official verification available' },
    { key: 'Use Cases', ielts: 'Study, migration, work', pte: 'Study, migration, work' },
    { key: 'Delivery', ielts: 'Secure digital + physical on request', pte: 'Secure digital + physical on request' },
    { key: 'Support', ielts: '24/7 WhatsApp support', pte: '24/7 WhatsApp support' },
    { key: 'Pricing', ielts: 'Contact us for a tailored quote', pte: 'Contact us for a tailored quote' },
  ]

  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">IELTS vs PTE — Quick Comparison</h2>
          <p className="section-subtitle mx-auto">Side-by-side comparison to help you choose the right certificate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {/* Left card */}
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">IELTS</h3>
            <p className="text-sm text-muted mb-4">International English testing system — widely accepted and trusted.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>✅ Widely recognised</li>
              <li>✅ Good for academic & migration</li>
              <li>✅ Official verification</li>
            </ul>
            <a
              href="https://wa.me/61489926983?text=Hi%20I%27m%20interested%20in%20IELTS%20certificate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FaWhatsapp /> Contact for Quote
            </a>
          </div>

          {/* Middle table */}
          <div className="glass-effect p-6 rounded-lg md:order-none order-last md:col-span-1">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-3 text-sm text-muted">Feature</th>
                    <th className="pb-3 text-sm text-muted">IELTS</th>
                    <th className="pb-3 text-sm text-muted">PTE</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((f) => (
                    <tr key={f.key} className="border-t border-white border-opacity-5">
                      <td className="py-3 text-sm text-muted w-1/3">{f.key}</td>
                      <td className="py-3 text-sm">{f.ielts}</td>
                      <td className="py-3 text-sm">{f.pte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right card */}
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">PTE</h3>
            <p className="text-sm text-muted mb-4">Pearson Test of English — modern computer-based test with fast reporting.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li>✅ Fast scoring</li>
              <li>✅ Good for job & migration applications</li>
              <li>✅ Official verification</li>
            </ul>
            <a
              href="https://wa.me/61489926983?text=Hi%20I%27m%20interested%20in%20PTE%20certificate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FaWhatsapp /> Contact for Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
