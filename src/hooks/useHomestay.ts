import { useState, useEffect } from 'react';
import { getHomestays } from '../services/homestayService';
import { Homestay } from '../types/homestay';

export const useHomestay = () => {
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomestays = async () => {
      try {
        const fetchedHomestays = await getHomestays();
        setHomestays(fetchedHomestays);
      } catch (error) {
        console.error('Error fetching homestays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomestays();
  }, []);

  return { homestays, loading };
};