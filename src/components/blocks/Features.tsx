import React from 'react';
import { Laptop, Shield, Zap } from 'lucide-react';

export const Features: React.FC = () => (
  <div className="py-16 px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
            <Laptop className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">Looks great on all devices</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-lg">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600">Built with security in mind</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-lg">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">Optimized for performance</p>
        </div>
      </div>
    </div>
  </div>
);