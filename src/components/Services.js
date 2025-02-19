'use client';
import { motion } from 'framer-motion';
import { ChartBarIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'End-to-End RCM',
    icon: ChartBarIcon,
    description: 'Comprehensive revenue cycle management from patient registration to payment collection'
  },
  {
    title: 'Authorization',
    icon: ShieldCheckIcon,
    description: 'Expert handling of insurance requirements and paperwork'
  },
  {
    title: 'Denial Management',
    icon: ClipboardDocumentCheckIcon,
    description: 'Proactive denial resolution and prevention strategies'
  },
  {
    title: 'Account Receivable',
    icon: CurrencyDollarIcon,
    description: 'Efficient AR management for optimal cash flow'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Our RCM Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}