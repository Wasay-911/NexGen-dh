import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "E-commerce Growth Strategy",
      client: "Fashion Retailer",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Increased online sales by 150% through targeted digital marketing campaigns",
      tags: ["SEO", "PPC", "Social Media"]
    },
    {
      title: "Brand Transformation",
      client: "Tech Startup",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete digital rebrand resulting in 200% increase in brand awareness",
      tags: ["Branding", "Content", "Social"]
    },
    {
      title: "Local Business Growth",
      client: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Boosted local visibility and increased foot traffic by 80%",
      tags: ["Local SEO", "Social Media", "Ads"]
    },
    {
      title: "B2B Lead Generation",
      client: "Software Company",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Generated 300% more qualified leads through content marketing",
      tags: ["Content", "SEO", "Email"]
    },
    {
      title: "Social Media Campaign",
      client: "Lifestyle Brand",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Achieved 500% increase in social media engagement",
      tags: ["Social Media", "Content", "Influencer"]
    },
    {
      title: "E-commerce SEO",
      client: "Online Marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Improved organic traffic by 200% and conversion rate by 50%",
      tags: ["SEO", "CRO", "Content"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their digital marketing goals through innovative strategies and execution.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResultCard
              number="500%"
              label="Average ROI"
              description="For our clients' digital marketing campaigns"
            />
            <ResultCard
              number="10M+"
              label="Leads Generated"
              description="Across all client campaigns"
            />
            <ResultCard
              number="95%"
              label="Client Satisfaction"
              description="Based on client feedback and reviews"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, client, image, description, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{client}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultCard({ number, label, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Portfolio;