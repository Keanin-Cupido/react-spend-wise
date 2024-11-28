import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border mt-12">
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">About SpendWise</h3>
            <p className="text-gray-400 text-sm">
              Track your expenses, manage budgets, and achieve your financial goals with SpendWise.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#dashboard" className="text-gray-400 hover:text-neon-green transition-colors">Dashboard</a></li>
              <li><a href="#expenses" className="text-gray-400 hover:text-neon-green transition-colors">Expenses</a></li>
              <li><a href="#budgets" className="text-gray-400 hover:text-neon-green transition-colors">Budgets</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Questions or feedback? Reach out to us at support@spendwise.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by SpendWise Team
          </p>
        </div>
      </div>
    </footer>
  );
}