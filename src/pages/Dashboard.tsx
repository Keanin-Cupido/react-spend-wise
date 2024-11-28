import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Header } from '../components/dashboard/Header';
import { Card } from '../components/ui/Card';
import ExpenseChart from '../components/ExpenseChart';
import BudgetProgress from '../components/BudgetProgress';
import ExpenseList from '../components/ExpenseList';
import { LineChart } from 'lucide-react';
import { useExpenses } from '../hooks/useExpenses';
import { useBudgets } from '../hooks/useBudgets';
import { calculateCategoryTotals, calculateTotalSpent, calculateTotalBudget } from '../utils/calculations';
import { exportToCSV } from '../utils/exportData';

export function Dashboard() {
  const { expenses, deleteExpense } = useExpenses();
  const { budgets } = useBudgets();

  const categoryTotals = calculateCategoryTotals(expenses);
  const totalSpent = calculateTotalSpent(categoryTotals);
  const totalBudget = calculateTotalBudget(budgets);

  return (
    <PageTransition>
      <Header 
        totalBudget={totalBudget}
        totalSpent={totalSpent}
        onExport={() => exportToCSV(expenses)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <ExpenseChart categoryTotals={categoryTotals} />
        </Card>
        <Card className="p-6">
          <BudgetProgress budgets={budgets} categoryTotals={categoryTotals} />
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
          <LineChart className="w-5 h-5 text-neon-green" />
        </div>
        <ExpenseList 
          expenses={expenses.slice(0, 5)} 
          onDeleteExpense={deleteExpense} 
        />
      </Card>
    </PageTransition>
  );
}