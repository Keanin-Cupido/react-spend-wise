import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Card } from '../components/ui/Card';
import { Settings as SettingsIcon, Download, Upload, Trash2, Bell, Moon, Sun } from 'lucide-react';
import { useExpenses } from '../hooks/useExpenses';
import { useBudgets } from '../hooks/useBudgets';
import { exportToCSV } from '../utils/exportData';

export function Settings() {
  const { expenses } = useExpenses();
  const { budgets } = useBudgets();
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          // Implement data import logic
          console.log('Imported data:', data);
        } catch (error) {
          console.error('Error importing data:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Customize your experience and manage your data</p>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <SettingsIcon className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-semibold text-white">App Preferences</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Dark Mode</h3>
                <p className="text-gray-400 text-sm">Toggle dark/light theme</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-neon-green" />
                ) : (
                  <Sun className="w-5 h-5 text-neon-green" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Notifications</h3>
                <p className="text-gray-400 text-sm">Enable/disable notifications</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className="p-2 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
              >
                <Bell className={`w-5 h-5 ${notifications ? 'text-neon-green' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Download className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-semibold text-white">Data Management</h2>
          </div>

          <div className="space-y-6">
            <div>
              <button
                onClick={() => exportToCSV(expenses)}
                className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
              >
                <Download className="w-5 h-5 text-neon-green" />
                <span className="text-white">Export Data</span>
              </button>
            </div>

            <div>
              <label className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors cursor-pointer">
                <Upload className="w-5 h-5 text-neon-green" />
                <span className="text-white">Import Data</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
              </label>
            </div>

            <div>
              <button
                onClick={handleClearData}
                className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-dark-bg border border-red-500 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
                <span className="text-red-500">Clear All Data</span>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}