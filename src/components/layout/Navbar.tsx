import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, LayoutDashboard, Receipt, PieChart, Settings, Info } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: Receipt, label: 'Expenses', to: '/expenses' },
  { icon: PieChart, label: 'Budgets', to: '/budgets' },
  { icon: Settings, label: 'Settings', to: '/settings' },
  { icon: Info, label: 'About', to: '/about' },
];

export function Navbar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-card-bg border-r border-border z-50">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <Wallet className="w-8 h-8 text-neon-green" />
            <div>
              <h1 className="text-xl font-bold text-white">SpendWise</h1>
              <p className="text-xs text-gray-400">Smart Budget Tracking</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-white/5 hover:text-neon-green transition-colors ${
                  isActive ? 'text-neon-green bg-white/5' : ''
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card-bg border-t border-border z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center space-y-1 text-gray-300 hover:text-neon-green transition-colors ${
                  isActive ? 'text-neon-green' : ''
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}