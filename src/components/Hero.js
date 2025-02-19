'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Financial Healthcare Partner
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Maximize revenue and minimize inefficiencies with our expert medical billing solutions
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Free Consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2"
        >
          <Image
            src="/med.jpg"
            alt="Healthcare Finance"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}