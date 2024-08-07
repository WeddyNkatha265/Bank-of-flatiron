// src/components/AddTransactionForm.js
import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission to add a new transaction
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="text" placeholder="Enter the description..." name="description" value={formData.description} onChange={handleChange} required />
      <input type="text" placeholder="Enter the category..." name="category" value={formData.category} onChange={handleChange} required />
      <input type="number" placeholder="Enter the amount ($)" name="amount" value={formData.amount} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
