import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { signIn } from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/admin');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;