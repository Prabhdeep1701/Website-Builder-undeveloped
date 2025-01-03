import React from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const Hero: React.FC<Props> = ({ 
  title = 'Welcome to Your Website',
  subtitle = 'Create something amazing with our website builder',
  buttonText = 'Get Started'
}) => (
  <div className="relative py-24 px-8 bg-gray-900 text-white">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
      <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold">
        {buttonText}
      </button>
    </div>
  </div>
);