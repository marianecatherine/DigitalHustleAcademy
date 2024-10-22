import React from 'react';
import { BookOpen, Star, Clock } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Step-by-Step Learning Paths</h1>
      <p className="text-xl text-center mb-12">Master digital marketing and online business with our comprehensive courses</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard
          title="Digital Product Creation Mastery"
          description="Learn to create and sell ebooks, printables, and templates"
          image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.8}
          duration="6 weeks"
        />
        <CourseCard
          title="Social Media Marketing Domination"
          description="Build a powerful presence on Instagram, YouTube, and TikTok"
          image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.9}
          duration="8 weeks"
        />
        <CourseCard
          title="Affiliate Marketing Success"
          description="Master the art of promoting products and earning commissions"
          image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.7}
          duration="4 weeks"
        />
        <CourseCard
          title="Email Marketing Automation"
          description="Create powerful email campaigns that convert subscribers into customers"
          image="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.8}
          duration="5 weeks"
        />
        <CourseCard
          title="SEO for Digital Entrepreneurs"
          description="Drive organic traffic and boost your online visibility"
          image="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.6}
          duration="6 weeks"
        />
        <CourseCard
          title="Launching Your Online Course"
          description="Create, market, and sell your own successful online course"
          image="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          rating={4.9}
          duration="8 weeks"
        />
      </div>
    </div>
  );
};

const CourseCard: React.FC<{ title: string; description: string; image: string; rating: number; duration: string }> = ({ title, description, image, rating, duration }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={20} />
          <span className="font-semibold">{rating}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock className="mr-1" size={20} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-100">
      <a href="#" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Enroll Now
      </a>
    </div>
  </div>
);

export default Courses;