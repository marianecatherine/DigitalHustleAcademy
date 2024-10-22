import React from 'react';
import { ArrowRight, BookOpen, ShoppingBag, Users, Tool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Turn Your Passion into Profits</h1>
          <p className="text-xl mb-8">Learn digital marketing strategies and build profitable online businesses</p>
          <a href="/courses" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen size={40} />}
            title="Step-by-Step Learning Paths"
            description="Guided courses from zero to launching your own online business"
          />
          <FeatureCard
            icon={<ShoppingBag size={40} />}
            title="Digital Product Marketplace"
            description="Create and sell your own digital products"
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Community Hub"
            description="Connect, collaborate, and learn from other entrepreneurs"
          />
          <FeatureCard
            icon={<Tool size={40} />}
            title="Freemium Tools & Resources"
            description="Access free and premium tools to kickstart your business"
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStoryCard
              name="Sarah Johnson"
              business="Digital Product Designer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              quote="Digital Hustle Academy helped me turn my design skills into a thriving online business."
            />
            <SuccessStoryCard
              name="Michael Chen"
              business="Social Media Consultant"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              quote="I went from struggling freelancer to booked-out consultant thanks to the strategies I learned here."
            />
            <SuccessStoryCard
              name="Emily Rodriguez"
              business="Online Course Creator"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              quote="My online course now generates passive income, giving me the freedom to travel and work from anywhere."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Hustle?</h2>
        <p className="text-xl mb-8">Join thousands of entrepreneurs who have transformed their lives with our platform</p>
        <a href="/courses" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 inline-flex items-center">
          Explore Courses <ArrowRight className="ml-2" />
        </a>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-indigo-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SuccessStoryCard: React.FC<{ name: string; business: string; image: string; quote: string }> = ({ name, business, image, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
    <p className="text-indigo-600 text-center mb-4">{business}</p>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

export default Home;