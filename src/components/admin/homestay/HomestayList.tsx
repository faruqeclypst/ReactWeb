import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

interface Homestay {
  id: string;
  name: string;
  pricePerNight: number;
}

interface HomestayListProps {
  homestays: Homestay[];
  onDelete: (id: string) => void;
}

const HomestayList: React.FC<HomestayListProps> = ({ homestays, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price per Night
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {homestays.map((homestay) => (
            <tr key={homestay.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                {homestay.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                ${homestay.pricePerNight}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <Link to={`/admin/homestays/edit/${homestay.id}`}>
                  <Button variant="secondary" className="mr-2">Edit</Button>
                </Link>
                <Button onClick={() => onDelete(homestay.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomestayList;