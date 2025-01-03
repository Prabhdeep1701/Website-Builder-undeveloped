import React from 'react';

interface Props {
  src?: string;
  alt?: string;
}

export const ImageBlock: React.FC<Props> = ({ 
  src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  alt = 'Sample'
}) => (
  <div className="py-12 px-8">
    <div className="max-w-3xl mx-auto">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  </div>
);