'use client';
import { motion } from 'framer-motion';
import { LinkedinIcon, GmailIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-end relative">
              <span className="text-blue-500 flex relative">
                <img src="icon.png" className="h-19 w-16 mr-2 relative" />
                <h2 className="bottom-0"> MedConnect</h2>
              </span>
            </h3>
            <p className="text-sm">Your Financial Healthcare Partner</p>
            <div className="mt-4">
              <p className="text-sm">Call us at</p>
              <a 
                href="tel:+19179671718" 
                className="text-white hover:text-blue-400 transition-colors text-lg"
              >
                +1 917-967-1718
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">RCM</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Billing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AR Management</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Denial Prevention</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

       
                <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Follow Us</h4>
                  <div className="flex space-x-4">
                  {[
                    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/medconnect-billing-solutions/' },
                    { 
                      icon: GmailIcon, 
                      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=medconnectbilling@gmail.com&su=Hello%20MedConnect&body=Hi%20MedConnect%20Team%2C' 
                    }, // Ensure mailto is correct
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                    target="_blank" // Open in new tab (optional)
                    rel="noopener noreferrer" // Security best practice
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} MedConnectBillingSolution. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            HIPAA Compliant | PCI DSS Certified
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
