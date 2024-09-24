import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Login from './pages/login';
import AdminDashboard from './pages/admin/index';
import ManageHomestays from './pages/admin/homestays/index';
import CreateHomestay from './pages/admin/homestays/create';
import EditHomestay from './pages/admin/homestays/edit';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/homestays" element={<ManageHomestays />} />
        <Route path="/admin/homestays/create" element={<CreateHomestay />} />
        <Route path="/admin/homestays/edit/:id" element={<EditHomestay />} />
      </Routes>
    </Router>
  );
};

export default App;