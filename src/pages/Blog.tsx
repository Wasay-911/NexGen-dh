import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

function Blog() {
  const posts = [
    {
      title: "10 SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the most effective SEO strategies that are driving results in the current digital landscape.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "John Smith",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "SEO"
    },
    {
      title: "The Future of Social Media Marketing",
      excerpt: "Explore emerging trends and technologies shaping the future of social media marketing.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      category: "Social Media"
    },
    {
      title: "Content Marketing ROI: Measuring Success",
      excerpt: "Learn how to effectively measure and optimize your content marketing return on investment.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Michael Chen",
      date: "Mar 10, 2024",
      readTime: "7 min read",
      category: "Content"
    },
    {
      title: "Email Marketing Best Practices for 2024",
      excerpt: "Stay ahead of the curve with these proven email marketing strategies and techniques.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Emma Wilson",
      date: "Mar 8, 2024",
      readTime: "5 min read",
      category: "Email"
    },
    {
      title: "Building a Strong Brand Identity Online",
      excerpt: "Tips and strategies for creating a memorable and effective brand presence in the digital space.",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "David Lee",
      date: "Mar 5, 2024",
      readTime: "9 min read",
      category: "Branding"
    },
    {
      title: "PPC Advertising: Advanced Techniques",
      excerpt: "Master advanced PPC strategies to improve campaign performance and ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Lisa Anderson",
      date: "Mar 3, 2024",
      readTime: "10 min read",
      category: "PPC"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Marketing Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay up to date with the latest trends, strategies, and insights in digital marketing.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest digital marketing insights and tips delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-96"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ title, excerpt, image, author, date, readTime, category }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;