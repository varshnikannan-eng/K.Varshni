export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  codeSnippet: string;
  interactiveType: 'calculator' | 'voting';
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'future';
}

export interface SkillItem {
  name: string;
  description: string;
  iconName: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: SkillItem[];
}

export interface GoalArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
