import React, { useState } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      {/* Form to add new transactions */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      {/* Table to display transactions */}
      <TransactionTable transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
