import React from 'react';
import { Users, Award, Clock, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About NexGen Digital Hub
              </h1>
              <p className="text-xl text-blue-100">
                We're a team of digital marketing experts passionate about helping businesses succeed in the digital world.
              </p>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              number="200+"
              label="Happy Clients"
            />
            <StatCard
              icon={<Award className="h-8 w-8 text-blue-600" />}
              number="50+"
              label="Awards Won"
            />
            <StatCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              number="10+"
              label="Years Experience"
            />
            <StatCard
              icon={<Coffee className="h-8 w-8 text-blue-600" />}
              number="1000+"
              label="Projects Completed"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2014, NexGen Digital Hub has grown from a small team of passionate marketers to a full-service digital marketing agency. Our journey has been driven by our commitment to delivering exceptional results for our clients and staying ahead of the digital curve.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be trusted by businesses of all sizes, from startups to enterprise organizations. Our team of experts brings together diverse skills and experiences to create innovative digital solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="John Smith"
              position="CEO & Founder"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Sarah Johnson"
              position="Marketing Director"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Michael Chen"
              position="Technical Lead"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly explore new technologies and strategies to keep our clients ahead of the curve."
            />
            <ValueCard
              title="Integrity"
              description="We believe in transparent communication and honest relationships with our clients."
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in everything we do, delivering results that exceed expectations."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TeamMember({ image, name, position }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default About;