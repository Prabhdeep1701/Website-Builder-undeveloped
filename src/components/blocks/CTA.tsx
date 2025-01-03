import React from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTA: React.FC<Props> = ({ 
  title = 'Ready to Get Started?',
  subtitle = 'Join thousands of satisfied customers today.',
  buttonText = 'Sign Up Now'
}) => (
  <div className="py-16 px-8 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8">{subtitle}</p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
        {buttonText}
      </button>
    </div>
  </div>
);