import React from 'react';

interface Props {
  props: {
    src?: string;
    alt?: string;
  };
  onChange: (props: Record<string, any>) => void;
}

export const ImageEditor: React.FC<Props> = ({ props, onChange }) => {
  const { src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', alt = 'Sample' } = props;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input
          type="text"
          value={src}
          onChange={(e) => onChange({ ...props, src: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Alt Text
        </label>
        <input
          type="text"
          value={alt}
          onChange={(e) => onChange({ ...props, alt: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};