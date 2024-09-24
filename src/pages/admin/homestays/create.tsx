import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../../components/layout/AdminLayout';
import HomestayForm from '../../../components/admin/homestay/HomestayForm';
import { createHomestay } from '../../../services/homestayService';

const CreateHomestay: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    await createHomestay(data);
    navigate('/admin/homestays');
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Create New Homestay</h1>
      <HomestayForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default CreateHomestay;