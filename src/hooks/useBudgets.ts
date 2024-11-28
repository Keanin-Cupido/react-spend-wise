import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBudgets, saveBudgets } from '../utils/storage';
import { Budget } from '../types';

export function useBudgets() {
  const queryClient = useQueryClient();

  const { data: budgets = [] } = useQuery({
    queryKey: ['budgets'],
    queryFn: getBudgets,
  });

  const updateBudgetMutation = useMutation({
    mutationFn: (newBudget: Budget) => {
      const updatedBudgets = [...budgets.filter(b => b.category !== newBudget.category), newBudget];
      saveBudgets(updatedBudgets);
      return updatedBudgets;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
    },
  });

  return {
    budgets,
    updateBudget: updateBudgetMutation.mutate,
    isLoading: updateBudgetMutation.isPending,
  };
}