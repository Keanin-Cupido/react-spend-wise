import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getExpenses, saveExpenses } from '../utils/storage';
import { Expense } from '../types';

export function useExpenses() {
  const queryClient = useQueryClient();

  const { data: expenses = [] } = useQuery({
    queryKey: ['expenses'],
    queryFn: getExpenses,
  });

  const addExpenseMutation = useMutation({
    mutationFn: (newExpense: Expense) => {
      const updatedExpenses = [...expenses, newExpense];
      saveExpenses(updatedExpenses);
      return updatedExpenses;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: (id: string) => {
      const updatedExpenses = expenses.filter(expense => expense.id !== id);
      saveExpenses(updatedExpenses);
      return updatedExpenses;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  return {
    expenses,
    addExpense: addExpenseMutation.mutate,
    deleteExpense: deleteExpenseMutation.mutate,
    isLoading: addExpenseMutation.isPending || deleteExpenseMutation.isPending,
  };
}