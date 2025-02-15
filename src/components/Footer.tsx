import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NexGen Digital Hub</h3>
            <p className="text-blue-200">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white">About</Link></li>
              <li><Link to="/portfolio" className="text-blue-200 hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="text-blue-200 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">Digital Strategy</li>
              <li className="text-blue-200">SEO Optimization</li>
              <li className="text-blue-200">Social Media Marketing</li>
              <li className="text-blue-200">Content Marketing</li>
              <li className="text-blue-200">Email Marketing</li>
              <li className="text-blue-200">PPC Advertising</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 NexGen Digital Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;