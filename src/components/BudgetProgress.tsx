import { Budget, CategoryTotal } from '../types';

interface BudgetProgressProps {
  budgets: Budget[];
  categoryTotals: CategoryTotal[];
}

export default function BudgetProgress({ budgets, categoryTotals }: BudgetProgressProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Budget Progress</h2>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const spent = categoryTotals.find(
            (ct) => ct.category === budget.category
          )?.total || 0;
          const percentage = Math.min((spent / budget.limit) * 100, 100);
          const isOverBudget = spent > budget.limit;

          return (
            <div key={budget.category}>
              <div className="flex justify-between text-sm mb-1">
                <span>{budget.category}</span>
                <span>
                  ${spent.toFixed(2)} / ${budget.limit.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    isOverBudget ? 'bg-red-600' : 'bg-green-600'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}