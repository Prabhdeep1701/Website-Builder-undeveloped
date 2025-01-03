import React from 'react';

interface Props {
  title?: string;
  content?: string;
}

export const TextBlock: React.FC<Props> = ({ 
  title = 'Your Content Here',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}) => (
  <div className="py-12 px-8">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);