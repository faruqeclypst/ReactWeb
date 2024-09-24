import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';

interface HomestayFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

const HomestayForm: React.FC<HomestayFormProps> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <Input
        label="Name"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        required
      />
      <Input
        label="Description"
        name="description"
        value={formData.description || ''}
        onChange={handleChange}
        required
      />
      <Input
        label="Price per Night"
        name="pricePerNight"
        type="number"
        value={formData.pricePerNight || ''}
        onChange={handleChange}
        required
      />
      <Input
        label="Image URL"
        name="imageUrl"
        value={formData.imageUrl || ''}
        onChange={handleChange}
        required
      />
      <Button type="submit">Save Homestay</Button>
    </form>
  );
};

export default HomestayForm;