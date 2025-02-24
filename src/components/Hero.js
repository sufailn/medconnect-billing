'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // components/Hero.js
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, selectedDateTime })
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Request failed');
    }

    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
    console.error('Submission Error:', error.message);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-r from-blue-50 to-cyan-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
    {/* Left Side: Text and Form */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Your Financial Healthcare Partner
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
        Maximize revenue and minimize inefficiencies with our expert medical billing solutions.
      </p>

      {/* Form Container */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url(Images/date.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative ">
            <label className="block text-sm  font-medium text-gray-700 mb-1">
              Select Date & Time
            </label>
            <input
              type="datetime-local"
              required
              placeholder="choose your date and time"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
              className="w-full p-3 opacity-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full opacity-50 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                </svg>
                Scheduling...
              </span>
            ) : (
              'Schedule Free Consultation'
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 mt-4 text-center font-medium">
              Scheduled successfully! We’ll confirm your appointment shortly.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 mt-4 text-center font-medium">
              Error scheduling appointment. Please try again.
            </p>
          )}
        </form>
      </div>
    </motion.div>

    {/* Right Side: Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 flex justify-center"
    >
      <Image
        src="/med.jpg"
        alt="Healthcare Finance"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
</section>
  );
}