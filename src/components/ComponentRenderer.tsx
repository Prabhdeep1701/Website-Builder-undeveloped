import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, X, Settings, ChevronUp, ChevronDown } from 'lucide-react';
import { Component } from '../types';
import { useWebsiteStore } from '../store/websiteStore';
import { Hero } from './blocks/Hero';
import { TextBlock } from './blocks/TextBlock';
import { ImageBlock } from './blocks/ImageBlock';
import { Features } from './blocks/Features';
import { CTA } from './blocks/CTA';
import { EditPanel } from './EditPanel';

const componentMap = {
  hero: Hero,
  text: TextBlock,
  image: ImageBlock,
  features: Features,
  cta: CTA,
};

const componentLabels = {
  hero: 'Hero Section',
  text: 'Text Block',
  image: 'Image Block',
  features: 'Features Grid',
  cta: 'Call to Action',
};

interface Props {
  component: Component;
}

export const ComponentRenderer: React.FC<Props> = ({ component }) => {
  const [isEditing, setIsEditing] = useState(false);
  const removeComponent = useWebsiteStore((state) => state.removeComponent);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const ComponentBlock = componentMap[component.type];

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group"
      {...attributes}
    >
      {/* Component Label */}
      <div className="absolute left-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
          {componentLabels[component.type]}
        </span>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 bg-white rounded-lg shadow-lg border border-gray-200 p-1">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-1.5 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
          title={isEditing ? "Close Editor" : "Edit Component"}
        >
          <Settings className="w-4 h-4" />
        </button>
        <div className="w-px bg-gray-200" />
        <button
          {...listeners}
          className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-move"
          title="Drag to Reorder"
        >
          <GripVertical className="w-4 h-4" />
        </button>
        <div className="w-px bg-gray-200" />
        <button
          onClick={() => removeComponent(component.id)}
          className="p-1.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
          title="Remove Component"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Component Wrapper */}
      <div className={`relative ${isEditing ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
        <ComponentBlock {...component.props} />
      </div>

      {/* Edit Panel */}
      {isEditing && (
        <div className="border-t-2 border-blue-500">
          <div className="bg-gray-50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Edit {componentLabels[component.type]}
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
            <EditPanel component={component} />
          </div>
        </div>
      )}
    </div>
  );
};