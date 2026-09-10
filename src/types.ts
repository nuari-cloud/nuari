export interface ProjectItem {
  id: string;
  title: string;
  category: 'program' | 'event' | 'content';
  role: string;
  period: string;
  summary: string;
  scale: string;
  challenges: string[];
  actions: string[];
  learnings: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  demoUrl?: string;
}

export interface CareerItem {
  id: string;
  period: string;
  organization: string;
  role: string;
  type: string;
  summary: string;
  tasks: {
    category: string;
    items: string[];
  }[];
  highlightNote?: {
    title: string;
    description: string;
    points: string[];
    conclusion: string;
  };
}

export interface CompetencyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyStrengths: string[];
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}
