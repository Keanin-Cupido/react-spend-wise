import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Dashboard } from '../../pages/Dashboard';
import { Expenses } from '../../pages/Expenses';
import { Budgets } from '../../pages/Budgets';
import { Settings } from '../../pages/Settings';
import { About } from '../../pages/About';
import { AnimatePresence } from 'framer-motion';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-dark-bg flex">
      <Navbar />
      <div className="flex-1 flex flex-col min-h-screen md:pl-64">
        <main className="flex-grow px-4 py-8 md:px-8 pb-20 md:pb-8">
          <div className="max-w-[1600px] mx-auto">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}