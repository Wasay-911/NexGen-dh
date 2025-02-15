import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Digital Presence
              </h1>
              <p className="text-xl mb-8">
                Innovative digital marketing solutions to help your business grow and succeed in the digital age.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Target className="h-12 w-12 text-blue-600" />}
              title="Digital Strategy"
              description="Comprehensive digital strategies tailored to your business goals and target audience."
            />
            <ServiceCard 
              icon={<TrendingUp className="h-12 w-12 text-blue-600" />}
              title="SEO Optimization"
              description="Boost your online visibility and rank higher in search engine results."
            />
            <ServiceCard 
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title="Social Media Marketing"
              description="Engage with your audience and build brand awareness across social platforms."
            />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose NexGen Digital Hub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creativity, data-driven insights, and industry expertise to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              number="01"
              title="Expert Team"
              description="Skilled professionals with years of industry experience"
            />
            <FeatureCard
              number="02"
              title="Data-Driven"
              description="Strategic decisions backed by comprehensive analytics"
            />
            <FeatureCard
              number="03"
              title="Custom Solutions"
              description="Tailored strategies for your unique business needs"
            />
            <FeatureCard
              number="04"
              title="Results Focused"
              description="Committed to delivering measurable outcomes"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ number, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-blue-600 font-bold text-xl mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;