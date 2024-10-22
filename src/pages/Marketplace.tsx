import React from 'react';
import { ShoppingBag, Download, DollarSign } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Digital Product Marketplace</h1>
      <p className="text-xl text-center mb-12">Discover and sell high-quality digital products created by our community</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          title="Social Media Content Calendar"
          description="12-month planner for consistent social media posting"
          image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={29.99}
          downloads={1250}
        />
        <ProductCard
          title="Email Marketing Templates Bundle"
          description="50+ customizable email templates for various campaigns"
          image="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={39.99}
          downloads={980}
        />
        <ProductCard
          title="Affiliate Marketing Toolkit"
          description="Complete guide and resources for successful affiliate marketing"
          image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={49.99}
          downloads={750}
        />
        <ProductCard
          title="Digital Product Launch Playbook"
          description="Step-by-step guide to launching your digital product"
          image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={59.99}
          downloads={620}
        />
        <ProductCard
          title="SEO Checklist and Audit Tool"
          description="Comprehensive SEO checklist and website audit spreadsheet"
          image="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={34.99}
          downloads={890}
        />
        <ProductCard
          title="Instagram Growth Strategy eBook"
          description="Proven strategies to grow your Instagram following organically"
          image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          price={24.99}
          downloads={1580}
        />
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ title: string; description: string; image: string; price: number; downloads: number }> = ({ title, description, image, price, downloads }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-indigo-600 font-semibold">
          <DollarSign className="mr-1" size={20} />
          <span>{price.toFixed(2)}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Download className="mr-1" size={20} />
          <span>{downloads} downloads</span>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-100">
      <a href="#" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Buy Now
      </a>
    </div>
  </div>
);

export default Marketplace;