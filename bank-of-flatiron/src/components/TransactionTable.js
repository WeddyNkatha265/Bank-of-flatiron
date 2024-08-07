// src/components/TransactionTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionTable({ transactions, setTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');

  // Fetch transactions from JSON server on component mount
  useEffect(() => {
    axios.get('http://localhost:8001/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, [setTransactions]);

  // Handle deleting a transaction
  const handleDelete = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Filter and sort transactions based on user input
  const filteredTransactions = transactions
    .filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });

  return (
    <div>
      {/* Search bar for filtering transactions */}
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {/* Buttons to sort transactions */}
        <button onClick={() => setSortKey('category')}>Sort by Category</button>
        <button onClick={() => setSortKey('description')}>Sort by Description</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                {/* Button to delete a transaction */}
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
