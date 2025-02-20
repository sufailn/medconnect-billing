'use client';
import { motion } from 'framer-motion';
import { ChartBarIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, ShieldCheckIcon, DocumentCheckIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'End-to-End RCM',
    icon: ChartBarIcon,
    description: 'We provide comprehensive End-to-End Revenue Cycle Management (RCM) services designed to optimize your practices financial performance. From patient registration to final payment collection, our expert team ensures accuracy, efficiency, and compliance at every step of the revenue cycle.',
    backgroundImage: 'url(Images/RCM.jpeg)'
  },
  {
    title: 'Authorization',
    icon: ShieldCheckIcon,
    description: 'Reduced Administrative Burden: Let our specialists handle complex paperwork and insurance requirements. We ensure timely and accurate authorization for your patients.',
    backgroundImage: 'url(Images/Authorization.png)'
  },
  {
    title: 'Denial Management',
    icon: ClipboardDocumentCheckIcon,
    description: 'Denial Management Services help identify the root causes of denials, implement corrective measures, and maximize claim recovery. Our expert team ensures that every denied claim is carefully reviewed, appealed, and resolved efficiently to reduce future denials.',
    backgroundImage: 'url(Images/Denial.png)'
  },
  {
    title: 'Account Receivable',
    icon: CurrencyDollarIcon,
    description: 'We recognize that effective management of your accounts receivable is crucial for maintaining healthy cash flow and ensuring timely revenue realization. Our comprehensive A/R services cover every step of the process—from accurate payment posting to proactive follow-up on outstanding claims.',
    backgroundImage: 'url(Images/AccountReceivable.png)'
  },
  {
    title: 'Eligibility',
    icon: DocumentCheckIcon,
    description: 'We recognize that effective management of your accounts receivable is crucial for maintaining healthy cash flow and ensuring timely revenue realization. Our comprehensive A/R services cover every step of the process—from accurate payment posting to proactive follow-up on outstanding claims.',
    backgroundImage: 'url(/Images/Eligibility.jpeg)'
  },
  {
    title: 'Front Desk Support',
    icon: ComputerDesktopIcon,
    description: 'Get live support from our experienced billing agents for seamless back-office operations. Our team ensures that your front desk staff is well-equipped to handle patient inquiries, appointment scheduling, and insurance verification.',
    backgroundImage: 'url(/Images/Front-Desk-Support.webp)'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Our RCM Services
        </motion.h2>
        <div className="mt-16 text-center">
          <p className="text-lg mb-10 text-gray-700">
            At MedConnect Billing Solutions we help healthcare providers increase revenue and optimise financial performance
             through tailored Revenue Cycle Management (RCM) strategies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-black opacity-40 rounded-xl"
                style={{ backgroundImage: service.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div className="relative z-10">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-black">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}