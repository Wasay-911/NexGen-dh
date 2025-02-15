import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  Megaphone, 
  Search,
  BarChart,
  PenTool,
  Globe
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies tailored to your business goals and target audience. We analyze your market position and create actionable plans for growth.",
      features: ["Market Analysis", "Competitor Research", "Growth Planning", "ROI Tracking"]
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "SEO Optimization",
      description: "Boost your online visibility and rank higher in search engine results. Our SEO experts use the latest techniques to improve your search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Social Media Marketing",
      description: "Engage with your audience and build brand awareness across social platforms. We create compelling content that resonates with your target audience.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      icon: <Mail className="h-12 w-12 text-blue-600" />,
      title: "Email Marketing",
      description: "Create targeted email campaigns that convert. We help you build and maintain meaningful relationships with your customers.",
      features: ["Campaign Strategy", "List Management", "A/B Testing", "Performance Analytics"]
    },
    {
      icon: <Megaphone className="h-12 w-12 text-blue-600" />,
      title: "Content Marketing",
      description: "Develop high-quality content that attracts and engages your target audience. Our content strategies drive traffic and conversions.",
      features: ["Content Strategy", "Blog Writing", "Copywriting", "Content Distribution"]
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      title: "Analytics & Reporting",
      description: "Get detailed insights into your digital marketing performance. We provide comprehensive reports and actionable recommendations.",
      features: ["Data Analysis", "Custom Reports", "KPI Tracking", "Performance Optimization"]
    },
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: "Brand Development",
      description: "Build a strong, memorable brand identity. We help you create a cohesive brand presence across all digital channels.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Voice & Tone"]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Web Development",
      description: "Create beautiful, functional websites that convert. Our web solutions are designed for optimal user experience and performance.",
      features: ["Custom Design", "Responsive Development", "SEO Integration", "Performance Optimization"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              description="We analyze your business needs and goals"
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="Develop a customized marketing plan"
            />
            <ProcessStep
              number="03"
              title="Implementation"
              description="Execute the strategy with precision"
            />
            <ProcessStep
              number="04"
              title="Optimization"
              description="Monitor and improve performance"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Services;