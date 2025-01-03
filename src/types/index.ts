export interface Component {
  id: string;
  type: 'hero' | 'text' | 'image' | 'features' | 'cta';
  props: Record<string, any>;
}

export interface Website {
  title: string;
  components: Component[];
}