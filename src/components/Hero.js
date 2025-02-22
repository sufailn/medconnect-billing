'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          selectedDateTime
        }),
      });
  
      const result = await response.json(); // Always parse JSON
      
      if (!response.ok) {
        console.error('Server Error:', result.error);
        throw new Error(result.error || 'Request failed');
      }
  
      setSubmitStatus('success');
      setSelectedDateTime('');
      setEmail('');
      
    } catch (error) {
      console.error('Full Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="datetime-local"
                required
                value={selectedDateTime}
                onChange={(e) => setSelectedDateTime(e.target.value)}
                className="w-full p-2 border rounded-lg mb-4"
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg mb-4"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <p className="text-green-600 mt-4">Scheduled successfully! We &apos; ll confirm your appointment shortly.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 mt-4">Error scheduling appointment. Please try again.</p>
          )}
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