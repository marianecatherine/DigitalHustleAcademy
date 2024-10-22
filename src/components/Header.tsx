import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, ShoppingBag, Users, Tool } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket size={32} />
          <span className="text-2xl font-bold">Digital Hustle Academy</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/courses" className="flex items-center hover:text-indigo-200">
                <BookOpen size={20} className="mr-1" />
                Courses
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="flex items-center hover:text-indigo-200">
                <ShoppingBag size={20} className="mr-1" />
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/community" className="flex items-center hover:text-indigo-200">
                <Users size={20} className="mr-1" />
                Community
              </Link>
            </li>
            <li>
              <Link to="/resources" className="flex items-center hover:text-indigo-200">
                <Tool size={20} className="mr-1" />
                Resources
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;