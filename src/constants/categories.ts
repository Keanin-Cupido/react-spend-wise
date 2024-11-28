export const EXPENSE_CATEGORIES = [
  'Food',
  'Transport',
  'Entertainment',
  'Shopping',
  'Bills',
  'Other',
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];