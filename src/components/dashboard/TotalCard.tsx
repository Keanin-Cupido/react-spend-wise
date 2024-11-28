import React from 'react';
import { Card } from '../ui/Card';

interface TotalCardProps {
  label: string;
  amount: number;
  isHighlighted?: boolean;
}

export function TotalCard({ label, amount, isHighlighted }: TotalCardProps) {
  return (
    <Card className="px-6 py-3">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className={`text-2xl font-semibold ${isHighlighted ? 'neon-text' : 'text-white'}`}>
        ${amount.toFixed(2)}
      </p>
    </Card>
  );
}