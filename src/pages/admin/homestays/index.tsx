import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';
import HomestayList from '../../../components/admin/homestay/HomestayList';
import { getHomestays, deleteHomestay } from '../../../services/homestayService';
import { Homestay } from '../../../types/homestay';

const ManageHomestays: React.FC = () => {
  const [homestays, setHomestays] = useState<Homestay[]>([]);

  useEffect(() => {
    fetchHomestays();
  }, []);

  const fetchHomestays = async () => {
    const fetchedHomestays = await getHomestays();
    setHomestays(fetchedHomestays);
  };

  const handleDelete = async (id: string) => {
    await deleteHomestay(id);
    fetchHomestays();
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Homestays</h1>
      <HomestayList homestays={homestays} onDelete={handleDelete} />
    </AdminLayout>
  );
};

export default ManageHomestays;