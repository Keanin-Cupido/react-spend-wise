import React, { useState } from 'react';
import { Target } from 'lucide-react';
import { Budget } from '../types';

const CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other'];

interface BudgetFormProps {
  onAddBudget: (budget: Budget) => void;
}

export default function BudgetForm({ onAddBudget }: BudgetFormProps) {
  const [formData, setFormData] = useState({
    category: '',
    limit: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.limit) return;

    const budget: Budget = {
      category: formData.category,
      limit: parseFloat(formData.limit),
    };

    onAddBudget(budget);
    setFormData({ category: '', limit: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="budgetCategory" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="budgetCategory"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="limit" className="block text-sm font-medium text-gray-700">
            Monthly Limit
          </label>
          <input
            type="number"
            id="limit"
            step="0.01"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            value={formData.limit}
            onChange={(e) => setFormData({ ...formData, limit: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <Target className="w-4 h-4 mr-2" />
          Set Budget
        </button>
      </div>
    </form>
  );
}