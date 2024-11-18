import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/utils/api';

const EditQuotationPage = ({ params }) => {
  const { id } = params;
  const [total, setTotal] = useState('');
  const [validTime, setValidTime] = useState('');

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await api.get(`/quotations/${id}`);
        setTotal(response.data.total);
        setValidTime(response.data.valid_time);
      } catch (error) {
        console.error('Error fetching quotation:', error);
      }
    };
    fetchQuotation();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/quotations/${id}`, {
        total,
        valid_time: validTime,
      });
      alert('Quotation updated successfully!');
    } catch (error) {
      console.error('Error updating quotation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Quotation</h1>
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
      <button type="submit">Update</button>
    </form>
  );
};

export default EditQuotationPage;
