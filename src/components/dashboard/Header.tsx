import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { TotalCard } from './TotalCard';

interface HeaderProps {
  totalBudget: number;
  totalSpent: number;
  onExport: () => void;
}

export function Header({ totalBudget, totalSpent, onExport }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">SpendWise</h1>
        <p className="text-gray-400">Track your expenses and manage your budget</p>
      </div>
      <div className="flex items-center gap-4">
        <TotalCard label="Total Budget" amount={totalBudget} />
        <TotalCard label="Total Spent" amount={totalSpent} isHighlighted />
        <Button variant="secondary" icon={Download} onClick={onExport}>
          Export
        </Button>
      </div>
    </div>
  );
}