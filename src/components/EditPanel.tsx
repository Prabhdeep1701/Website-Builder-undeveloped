import React from 'react';
import { Component } from '../types';
import { useWebsiteStore } from '../store/websiteStore';
import { HeroEditor } from './editors/HeroEditor';
import { TextEditor } from './editors/TextEditor';
import { ImageEditor } from './editors/ImageEditor';
import { FeaturesEditor } from './editors/FeaturesEditor';
import { CTAEditor } from './editors/CTAEditor';

const editorMap = {
  hero: HeroEditor,
  text: TextEditor,
  image: ImageEditor,
  features: FeaturesEditor,
  cta: CTAEditor,
};

interface Props {
  component: Component;
}

export const EditPanel: React.FC<Props> = ({ component }) => {
  const updateComponent = useWebsiteStore((state) => state.updateComponent);
  const Editor = editorMap[component.type];

  const handleUpdate = (newProps: Record<string, any>) => {
    updateComponent(component.id, { ...component.props, ...newProps });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <Editor props={component.props} onChange={handleUpdate} />
    </div>
  );
};