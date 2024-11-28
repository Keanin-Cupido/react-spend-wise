import { Expense, CategoryTotal, Budget } from '../types';

export const calculateCategoryTotals = (expenses: Expense[]): CategoryTotal[] => {
  return expenses.reduce((acc, expense) => {
    const existingCategory = acc.find((ct) => ct.category === expense.category);
    if (existingCategory) {
      existingCategory.total += expense.amount;
    } else {
      acc.push({ category: expense.category, total: expense.amount });
    }
    return acc;
  }, [] as CategoryTotal[]);
};

export const calculateTotalSpent = (categoryTotals: CategoryTotal[]): number => {
  return categoryTotals.reduce((sum, cat) => sum + cat.total, 0);
};

export const calculateTotalBudget = (budgets: Budget[]): number => {
  return budgets.reduce((sum, budget) => sum + budget.limit, 0);
};