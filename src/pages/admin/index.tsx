import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Use the sidebar to navigate.</p>
    </AdminLayout>
  );
};

export default AdminDashboard;