"use client";
import React, { useEffect, useState } from 'react';
import api from '@/utils/api';

const QuotationsPage = () => {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await api.get('/quotations');
        setQuotations(response.data);
      } catch (error) {
        console.error('Error fetching quotations:', error);
      }
    };
    fetchQuotations();
  }, []);

  return (
    <div>
      <h1>Quotations</h1>
      <ul>
        {quotations.map((q) => (
          <li key={q.id}>
            {q.total} - {q.valid_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotationsPage;
