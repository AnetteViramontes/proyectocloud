import React, { useState } from 'react';
import api from '@/utils/api';

const CreateQuotationPage = () => {
  const [total, setTotal] = useState('');
  const [validTime, setValidTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/quotations', {
        total,
        valid_time: validTime,
        pdf_url: 'https://example.com/path/to/pdf', 
      });
      alert('Quotation created successfully!');
    } catch (error) {
      console.error('Error creating quotation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Quotation</h1>
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <input
        type="date"
        placeholder="Valid Time"
        value={validTime}
        onChange={(e) => setValidTime(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateQuotationPage;
