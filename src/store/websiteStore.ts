import { create } from 'zustand';
import { Component, Website } from '../types';

interface WebsiteStore {
  website: Website;
  deployStatus: 'idle' | 'deploying' | 'success' | 'error';
  deployUrl: string | null;
  addComponent: (component: Component) => void;
  updateComponent: (id: string, props: Record<string, any>) => void;
  reorderComponents: (components: Component[]) => void;
  removeComponent: (id: string) => void;
  setDeployStatus: (status: 'idle' | 'deploying' | 'success' | 'error') => void;
  setDeployUrl: (url: string | null) => void;
  updateWebsiteTitle: (title: string) => void;
}

export const useWebsiteStore = create<WebsiteStore>((set) => ({
  website: {
    title: 'My Website',
    components: [],
  },
  deployStatus: 'idle',
  deployUrl: null,
  addComponent: (component) =>
    set((state) => ({
      website: {
        ...state.website,
        components: [...state.website.components, component],
      },
    })),
  updateComponent: (id, props) =>
    set((state) => ({
      website: {
        ...state.website,
        components: state.website.components.map((component) =>
          component.id === id ? { ...component, props } : component
        ),
      },
    })),
  reorderComponents: (components) =>
    set((state) => ({
      website: {
        ...state.website,
        components,
      },
    })),
  removeComponent: (id) =>
    set((state) => ({
      website: {
        ...state.website,
        components: state.website.components.filter((component) => component.id !== id),
      },
    })),
  setDeployStatus: (status) => set({ deployStatus: status }),
  setDeployUrl: (url) => set({ deployUrl: url }),
  updateWebsiteTitle: (title) =>
    set((state) => ({
      website: {
        ...state.website,
        title,
      },
    })),
}));