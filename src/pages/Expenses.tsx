import React, { useState } from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Card } from '../components/ui/Card';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { useExpenses } from '../hooks/useExpenses';
import { Filter, SlidersHorizontal } from 'lucide-react';

export function Expenses() {
  const { expenses, deleteExpense } = useExpenses();
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

  const filteredExpenses = expenses
    .filter(expense => !filterCategory || expense.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.amount - a.amount;
    });

  const categories = Array.from(new Set(expenses.map(expense => expense.category)));

  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Expenses</h1>
        <p className="text-gray-400">Track and manage your expenses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-neon-green" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-dark-bg border border-border rounded-lg px-3 py-2 text-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <SlidersHorizontal className="w-5 h-5 text-neon-green" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
                  className="bg-dark-bg border border-border rounded-lg px-3 py-2 text-sm"
                >
                  <option value="date">Sort by Date</option>
                  <option value="amount">Sort by Amount</option>
                </select>
              </div>
            </div>
            <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
          </Card>
        </div>

        <div>
          <Card className="p-6 sticky top-8">
            <ExpenseForm onAddExpense={(expense) => {
              // Add expense logic here
            }} />
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}