import React from 'react';

interface Props {
  props: {
    title?: string;
    content?: string;
  };
  onChange: (props: Record<string, any>) => void;
}

export const TextEditor: React.FC<Props> = ({ props, onChange }) => {
  const { title = 'Your Content Here', content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' } = props;

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
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => onChange({ ...props, content: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};