import React from 'react';
import { Plus, LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const ComponentButton: React.FC<Props> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm rounded-lg 
        hover:bg-gray-50 border border-gray-200 hover:border-gray-300 
        transition-all duration-200 hover:shadow-sm group"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 
        text-gray-500 group-hover:bg-white group-hover:text-gray-900 
        transition-colors duration-200"
      >
        <Icon className="w-4 h-4" />
      </div>
      <span className="font-medium text-gray-700 group-hover:text-gray-900">
        {label}
      </span>
      <div className="ml-auto transform group-hover:scale-110 transition-transform duration-200">
        <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
      </div>
    </button>
  );
};