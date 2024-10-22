import React from 'react';
import { FileText, Download, Lock } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Freemium Tools & Resources</h1>
      <p className="text-xl text-center mb-12">Access powerful tools and resources to kickstart and grow your online business</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ResourceCard
          title="Social Media Content Calendar"
          description="Plan and organize your social media posts with this free template"
          icon={<FileText size={40} />}
          isPremium={false}
        />
        <ResourceCard
          title="Email List Growth Checklist"
          description="20-point checklist to skyrocket your email subscriber count"
          icon={<FileText size={40} />}
          isPremium={false}
        />
        <ResourceCard
          title="Digital Product Launch Planner"
          description="Step-by-step guide to launching your digital product successfully"
          icon={<FileText size={40} />}
          isPremium={true}
        />
        <ResourceCard
          title="SEO Keyword Research Tool"
          description="Find high-ranking keywords for your niche with our premium tool"
          icon={<FileText size={40} />}
          isPremium={true}
        />
        <ResourceCard
          title="Affiliate Marketing Spreadsheet"
          description="Track your affiliate links and earnings with this free template"
          icon={<FileText size={40} />}
          isPremium={false}
        />
        <ResourceCard
          title="Sales Funnel Templates"
          description="Premium collection of high-converting sales funnel templates"
          icon={<FileText size={40} />}
          isPremium={true}
        />
      </div>
    </div>
  );
};

const ResourceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; isPremium: boolean }> = ({ title, description, icon, isPremium }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <div className="px-6 py-4 bg-gray-100">
      {isPremium ? (
        <a href="#" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
          <Lock size={20} className="mr-2" />
          Unlock Premium
        </a>
      ) : (
        <a href="#" className="block w-full text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center">
          <Download size={20} className="mr-2" />
          Download Free
        </a>
      )}
    </div>
  </div>
);

export default Resources;