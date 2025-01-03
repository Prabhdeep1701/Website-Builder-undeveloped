import React from 'react';
import { useWebsiteStore } from '../store/websiteStore';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ComponentRenderer } from './ComponentRenderer';
import { Layout, ArrowDown } from 'lucide-react';

export const Preview: React.FC = () => {
  const { components } = useWebsiteStore((state) => state.website);
  const reorderComponents = useWebsiteStore((state) => state.reorderComponents);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = components.findIndex((c) => c.id === active.id);
      const newIndex = components.findIndex((c) => c.id === over.id);

      const newComponents = [...components];
      const [removed] = newComponents.splice(oldIndex, 1);
      newComponents.splice(newIndex, 0, removed);

      reorderComponents(newComponents);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {components.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-50">
              <Layout className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Start Building Your Website
            </h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Add components from the sidebar to create your perfect website. Drag and drop to reorder them.
            </p>
            <div className="flex justify-center">
              <div className="animate-bounce">
                <ArrowDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        ) : (
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={components} strategy={verticalListSortingStrategy}>
              <div className="space-y-8">
                {components.map((component) => (
                  <ComponentRenderer key={component.id} component={component} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
};