import { Expense, Budget } from '../types';

export const saveExpenses = (expenses: Expense[]): void => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

export const getExpenses = (): Expense[] => {
  const expenses = localStorage.getItem('expenses');
  return expenses ? JSON.parse(expenses) : [];
};

export const saveBudgets = (budgets: Budget[]): void => {
  localStorage.setItem('budgets', JSON.stringify(budgets));
};

export const getBudgets = (): Budget[] => {
  const budgets = localStorage.getItem('budgets');
  return budgets ? JSON.parse(budgets) : [];
};