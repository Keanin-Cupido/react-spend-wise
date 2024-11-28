import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Card } from '../components/ui/Card';
import BudgetForm from '../components/BudgetForm';
import BudgetProgress from '../components/BudgetProgress';
import { useBudgets } from '../hooks/useBudgets';
import { useExpenses } from '../hooks/useExpenses';
import { calculateCategoryTotals } from '../utils/calculations';
import { Target, AlertTriangle } from 'lucide-react';

export function Budgets() {
  const { budgets, updateBudget } = useBudgets();
  const { expenses } = useExpenses();
  const categoryTotals = calculateCategoryTotals(expenses);

  const overBudgetCategories = budgets.filter(budget => {
    const spent = categoryTotals.find(ct => ct.category === budget.category)?.total || 0;
    return spent > budget.limit;
  });

  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Budget Management</h1>
        <p className="text-gray-400">Set and track your spending limits</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="w-5 h-5 text-neon-green" />
              <h2 className="text-xl font-semibold text-white">Budget Overview</h2>
            </div>
            <BudgetProgress budgets={budgets} categoryTotals={categoryTotals} />
          </Card>

          {overBudgetCategories.length > 0 && (
            <Card className="p-6 border-red-500">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Over Budget Alert</h3>
              </div>
              <div className="space-y-4">
                {overBudgetCategories.map(budget => {
                  const spent = categoryTotals.find(ct => ct.category === budget.category)?.total || 0;
                  return (
                    <div key={budget.category} className="flex justify-between items-center">
                      <span className="text-gray-400">{budget.category}</span>
                      <span className="text-red-500">
                        ${spent.toFixed(2)} / ${budget.limit.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>

        <div>
          <Card className="p-6 sticky top-8">
            <BudgetForm onAddBudget={updateBudget} />
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}