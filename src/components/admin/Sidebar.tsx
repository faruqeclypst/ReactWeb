import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/homestays" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Manage Homestays
              </Link>
            </li>
            <li>
              <Link to="/admin/homestays/create" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Add New Homestay
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;