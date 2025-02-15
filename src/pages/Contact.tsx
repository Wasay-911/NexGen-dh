import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with our digital marketing expertise.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="h-6 w-6" />}
                  title="Email Us"
                  content="info@nexgendigitalhub.com"
                  link="mailto:info@nexgendigitalhub.com"
                />
                <ContactInfo
                  icon={<Phone className="h-6 w-6" />}
                  title="Call Us"
                  content="+1 (555) 123-4567"
                  link="tel:+15551234567"
                />
                <ContactInfo
                  icon={<MapPin className="h-6 w-6" />}
                  title="Visit Us"
                  content="123 Digital Street, Tech City, TC 12345"
                  link="#"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
                  <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
                  <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
                  <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Replace with actual map implementation */}
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, title, content, link }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 rounded-full p-3 mr-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <a
          href={link}
          className="text-gray-600 hover:text-blue-600 transition duration-300"
        >
          {content}
        </a>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
    >
      {icon}
    </a>
  );
}

export default Contact;