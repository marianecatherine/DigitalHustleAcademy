import React from 'react';
import { Users, MessageSquare, Calendar, Award } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Community Hub</h1>
      <p className="text-xl text-center mb-12">Connect, collaborate, and learn from fellow digital entrepreneurs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <CommunityFeature
          icon={<MessageSquare size={40} />}
          title="Discussion Forums"
          description="Engage in topic-specific discussions, ask questions, and share your expertise"
        />
        <CommunityFeature
          icon={<Calendar size={40} />}
          title="Live Q&A Sessions"
          description="Join weekly live sessions with industry experts and successful entrepreneurs"
        />
        <CommunityFeature
          icon={<Users size={40} />}
          title="Networking Opportunities"
          description="Connect with like-minded individuals and potential collaborators"
        />
        <CommunityFeature
          icon={<Award size={40} />}
          title="Challenges & Contests"
          description="Participate in monthly challenges to push your skills and win prizes"
        />
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCard
          title="Social Media Marketing Masterclass"
          date="May 15, 2024"
          time="2:00 PM - 4:00 PM EST"
          speaker="Sarah Johnson"
          image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <EventCard
          title="Launching Your First Digital Product"
          date="May 22, 2024"
          time="1:00 PM - 3:00 PM EST"
          speaker="Michael Chen"
          image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
        <EventCard
          title="SEO Strategies for 2024"
          date="May 29, 2024"
          time="3:00 PM - 5:00 PM EST"
          speaker="Emily Rodriguez"
          image="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        />
      </div>
    </div>
  );
};

const CommunityFeature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventCard: React.FC<{ title: string; date: string; time: string; speaker: string; image: string }> = ({ title, date, time, speaker, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{date} | {time}</p>
      <p className="text-indigo-600 font-semibold">Speaker: {speaker}</p>
    </div>
    <div className="px-6 py-4 bg-gray-100">
      <a href="#" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Register Now
      </a>
    </div>
  </div>
);

export default Community;