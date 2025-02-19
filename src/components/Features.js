'use client';
import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { ArrowTrendingUpIcon, ClockIcon, HeartIcon, BanknotesIcon } from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      title: "Boost Profitability",
      icon: ArrowTrendingUpIcon,
      description: "Maximize revenue and minimize inefficiencies with our expert medical billing and RCM services",
      stats: "29k+ Paid Claims"
    },
    {
      title: "Enhance Efficiency",
      icon: ClockIcon,
      description: "Accurate claims submission, faster reimbursements, and reduced denials through optimized workflows",
      stats: "750+ Patients Handled"
    },
    {
      title: "Better Patient Care",
      icon: HeartIcon,
      description: "Reduce administrative burdens and focus on delivering quality patient care",
      stats: "15+ Happy Doctors"
    }
  ];

  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "98%", label: "Claim Accuracy" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Certified Experts" }
  ];

  const AnimatedCounter = ({ value }) => {
    const [count, setCount] = React.useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView();
    React.useEffect(() => {
        if (inView) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 }
          });
          
          const animate = () => {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = Math.ceil(value / (duration / 100));
    
            const timer = setInterval(() => {
              start += increment;
              if (start >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 100);
    
            return () => clearInterval(timer);
          };
    
          animate();
        }
      }, [inView, value, controls]);
    
        return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className="text-4xl font-semibold text-blue-600"
        >
            {count}
        </motion.span>
        );
    }      

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Practice
          </h2>
          <p className="text-xl text-gray-600">
            Key benefits of partnering with MedConnect
          </p>
        </motion.div>
</div>
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <BanknotesIcon className="h-5 w-5 mr-2" />
                <span>{feature.stats}</span>
              </div>
            </motion.div>
          ))}
      </div>  
<div className="grid md:grid-cols-4 gap-8 mx-10 mb-20">
{stats.map((stat) => (
  <motion.div 
    key={stat.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 bg-blue-50 rounded-lg"
  >
    <div className="text-4xl font-bold text-blue-600 mb-2">
      <AnimatedCounter value={parseInt(stat.number)} />
      {stat.number.includes('+') && '+'}
    </div>
    <div className="text-gray-700 font-medium">
      {stat.label}
    </div>
  </motion.div>
))}
</div>


      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
      >
        <div className="pattern-dots pattern-blue-500 pattern-opacity-20 pattern-size-4" />
      </motion.div>
    </section>
  );
}