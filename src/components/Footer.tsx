import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Digital Hustle Academy</h3>
            <p className="text-gray-400">Turn Your Passion into Profits</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-indigo-400">Courses</a></li>
              <li><a href="/marketplace" className="hover:text-indigo-400">Marketplace</a></li>
              <li><a href="/community" className="hover:text-indigo-400">Community</a></li>
              <li><a href="/resources" className="hover:text-indigo-400">Resources</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: info@digitalhustleacademy.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram /></a>
              <a href="#" className="hover:text-indigo-400"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Digital Hustle Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;