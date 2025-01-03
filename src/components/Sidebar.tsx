import React from 'react';
import { Layout, Type, Image, Grid, MessageSquare } from 'lucide-react';
import { useWebsiteStore } from '../store/websiteStore';
import { ComponentButton } from './sidebar/ComponentButton';

const componentTypes = [
  { type: 'hero', label: 'Hero Section', icon: Layout },
  { type: 'text', label: 'Text Block', icon: Type },
  { type: 'image', label: 'Image', icon: Image },
  { type: 'features', label: 'Features Grid', icon: Grid },
  { type: 'cta', label: 'Call to Action', icon: MessageSquare },
];

export const Sidebar: React.FC = () => {
  const addComponent = useWebsiteStore((state) => state.addComponent);

  const handleAddComponent = (type: string) => {
    addComponent({
      id: crypto.randomUUID(),
      type: type as any,
      props: {},
    });
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 flex-1 overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Components</h2>
        <p className="text-sm text-gray-500 mb-6">Drag or click to add to your page</p>
        <div className="space-y-3">
          {componentTypes.map(({ type, label, icon }) => (
            <ComponentButton
              key={type}
              icon={icon}
              label={label}
              onClick={() => handleAddComponent(type)}
            />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          Made by Prabhdeep singh
        </p>
      </div>
    </div>
  );
};