import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  props: {
    features?: Feature[];
  };
  onChange: (props: Record<string, any>) => void;
}

export const FeaturesEditor: React.FC<Props> = ({ props, onChange }) => {
  const { features = [
    { icon: 'laptop', title: 'Responsive Design', description: 'Looks great on all devices' },
    { icon: 'shield', title: 'Secure', description: 'Built with security in mind' },
    { icon: 'zap', title: 'Fast', description: 'Optimized for performance' }
  ] } = props;

  const updateFeature = (index: number, field: keyof Feature, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    onChange({ features: newFeatures });
  };

  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="space-y-4 pb-4 border-b border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={feature.title}
              onChange={(e) => updateFeature(index, 'title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={feature.description}
              onChange={(e) => updateFeature(index, 'description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};