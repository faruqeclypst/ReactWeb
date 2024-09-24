import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getHomestays } from '../../services/homestayService';
import { Homestay } from '../../types/homestay';

const FeaturedHomestays: React.FC = () => {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomestays = async () => {
      try {
        const fetchedHomestays = await getHomestays();
        // Ambil hanya 3 homestay pertama untuk ditampilkan sebagai featured
        setHomestays(fetchedHomestays.slice(0, 3));
      } catch (error) {
        console.error('Error fetching homestays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomestays();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading featured homestays...</div>;
  }

  if (homestays.length === 0) {
    return <div className="text-center py-16">No featured homestays available.</div>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Homestays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homestays.map((homestay) => (
            <motion.div
              key={homestay.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden homestay-card"
            >
              <img src={homestay.imageUrl} alt={homestay.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{homestay.name}</h3>
                <p className="text-gray-600 mt-2">{homestay.description.substring(0, 100)}...</p>
                <p className="text-blue-600 font-semibold mt-2">${homestay.pricePerNight} / night</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomestays;