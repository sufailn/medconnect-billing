'use client';
import { motion } from 'framer-motion';
import { CalendarIcon, ChatBubbleBottomCenterTextIcon, PhoneIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: "Make Appointment",
    icon: CalendarIcon,
    description: "We make it easy for you to get the support you need. Whether you have questions about our services or want to discuss how we can optimize your revenue cycle, our experts are ready to assist you."
  },
  {
    title: "Appointment Acknowledgement",
    icon: ChatBubbleBottomCenterTextIcon,
    description: "You will receive an acknowledgment via email or phone within few minutes."
  },
  {
    title: "Formal Catch-up",
    icon: PhoneIcon,
    description: "Book a time that works for you, and let’s connect for a meaningful conversation."
  },
  {
    title: "Q&A ",
    icon: QuestionMarkCircleIcon,
    description: "We will welcome any questions from your before we work together."
  }
];

export default function Steps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          4 Easy Simple Phases And Get Your Solution
          </h2>
          <p className="text-xl text-gray-600">
          The following four steps are faster than you might expect and designed to deliver optimal results for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              
              <step.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute -right-8 top-1/2 w-8 h-1 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
       
      </div>
    </section>
  );
}