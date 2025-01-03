import React from 'react';

interface Props {
  props: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
  };
  onChange: (props: Record<string, any>) => void;
}

export const HeroEditor: React.FC<Props> = ({ props, onChange }) => {
  const { title = 'Welcome to Your Website', subtitle = 'Create something amazing with our website builder', buttonText = 'Get Started' } = props;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => onChange({ ...props, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subtitle
        </label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => onChange({ ...props, subtitle: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Button Text
        </label>
        <input
          type="text"
          value={buttonText}
          onChange={(e) => onChange({ ...props, buttonText: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};