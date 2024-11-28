import React from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Card } from '../components/ui/Card';
import { Info, Github, Twitter, Mail, Heart } from 'lucide-react';

export function About() {
  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">About SpendWise</h1>
        <p className="text-gray-400">Learn more about our expense tracking application</p>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Info className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-semibold text-white">About the Project</h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400">
              SpendWise is a modern expense tracking application designed to help you manage your
              finances effectively. With features like expense categorization, budget tracking, and
              detailed analytics, SpendWise makes it easy to stay on top of your spending habits.
            </p>

            <h3 className="text-white font-semibold mt-6 mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Intuitive expense tracking and categorization</li>
              <li>• Real-time budget monitoring and alerts</li>
              <li>• Detailed spending analytics and reports</li>
              <li>• Data export and backup capabilities</li>
              <li>• Dark mode and customizable preferences</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-semibold text-white">Connect With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://github.com/spendwise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-4 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
            >
              <Github className="w-5 h-5 text-neon-green" />
              <span className="text-white">GitHub</span>
            </a>

            <a
              href="https://twitter.com/spendwise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-4 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
            >
              <Twitter className="w-5 h-5 text-neon-green" />
              <span className="text-white">Twitter</span>
            </a>

            <a
              href="mailto:support@spendwise.com"
              className="flex items-center space-x-2 p-4 rounded-lg bg-dark-bg border border-border hover:border-neon-green transition-colors"
            >
              <Mail className="w-5 h-5 text-neon-green" />
              <span className="text-white">Email Us</span>
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Version 1.0.0</p>
            <p className="text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> by the SpendWise Team
            </p>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}