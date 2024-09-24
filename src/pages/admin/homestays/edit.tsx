import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../../components/layout/AdminLayout';
import HomestayForm from '../../../components/admin/homestay/HomestayForm';
import { getHomestay, updateHomestay } from '../../../services/homestayService';
import { Homestay } from '../../../types/homestay';

const EditHomestay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [homestay, setHomestay] = useState<Homestay | null>(null);

  useEffect(() => {
    const fetchHomestay = async () => {
      if (id) {
        const fetchedHomestay = await getHomestay(id);
        setHomestay(fetchedHomestay);
      }
    };
    fetchHomestay();
  }, [id]);

  const handleSubmit = async (data: any) => {
    if (id) {
      await updateHomestay(id, data);
      navigate('/admin/homestays');
    }
  };

  if (!homestay) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Homestay</h1>
      <HomestayForm onSubmit={handleSubmit} initialData={homestay} />
    </AdminLayout>
  );
};

export default EditHomestay;