import { ProjectItem, TimelineStep, SkillCategory, GoalArea } from '../types';

export const PERSONAL_INFO = {
  name: 'VARSHNI',
  fullName: 'Varshni',
  role: 'B.Tech CSE Student • Aspiring AI Engineer',
  tagline: 'Aspiring AI Engineer | Computer Science Student | Curious Learner',
  introduction: "I'm Varshni, a first-year B.Tech Computer Science Engineering student aspiring to become an AI Engineer. I'm currently building my foundation in Python, web development, and Generative AI while exploring how technology can be used to solve real-world problems.",
  aboutParagraphs: [
    "I am a first-year B.Tech Computer Science Engineering student with an avid curiosity for Artificial Intelligence. My journey in technology started with a passion to understand how intelligent systems function, and I am actively taking my first steps toward becoming an AI Engineer.",
    "Currently, I am strengthening my programming fundamentals in Python and learning the essential building blocks of web development using HTML, CSS, and JavaScript. I am also experimenting with beginner-level Generative AI concepts to understand how AI can assist human creativity and problem-solving.",
    "I believe the best way to master computer science is through consistent, hands-on practice. I enjoy learning through practical projects and strive to continuously improve my technical skills, one concept at a time."
  ],
  profileCard: {
    name: 'Varshni',
    education: 'B.Tech Computer Science Engineering',
    year: 'First Year',
    careerGoal: 'AI Engineer',
    currentFocus: 'Python • Web Development • Generative AI'
  },
  socialLinks: {
    github: 'https://github.com/varshnikannan-eng/python-programs/upload/main',
    linkedin: 'https://www.linkedin.com/in/k-varshni-342804430?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    badge: 'Core Logic',
    skills: [
      {
        name: 'Python',
        description: 'Building my programming fundamentals and learning to solve problems using Python.',
        iconName: 'Code2',
        level: 'Foundational'
      }
    ]
  },
  {
    title: 'Web Development',
    badge: 'Foundations',
    skills: [
      {
        name: 'HTML',
        description: 'Structuring clean and semantic content for web pages.',
        iconName: 'FileCode',
        level: 'Foundational'
      },
      {
        name: 'CSS',
        description: 'Styling interfaces with responsive layouts and modern design basics.',
        iconName: 'Palette',
        level: 'Foundational'
      },
      {
        name: 'JavaScript',
        description: 'Learning fundamental scripting to introduce interactivity to web pages.',
        iconName: 'Zap',
        level: 'Foundational'
      }
    ]
  },
  {
    title: 'Generative AI',
    badge: 'Exploration',
    skills: [
      {
        name: 'Generative AI',
        description: 'Exploring Generative AI concepts and building beginner-level AI projects.',
        iconName: 'Sparkles',
        level: 'Exploring'
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-student-calculator',
    title: 'Student Calculator',
    category: 'Python Project',
    description: 'A beginner-friendly calculator project created to practice Python programming fundamentals and basic problem-solving.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/varshnikannan-eng/python-programs/upload/main',
    codeSnippet: `# Student Calculator in Python
def calculate(num1, operator, num2):
    if operator == '+':
        return num1 + num2
    elif operator == '-':
        return num1 - num2
    elif operator == '*':
        return num1 * num2
    elif operator == '/':
        return num1 / num2 if num2 != 0 else "Cannot divide by zero"
    else:
        return "Invalid Operator"`,
    interactiveType: 'calculator'
  },
  {
    id: 'project-voting-calculator',
    title: 'Voting Eligibility Calculator',
    category: 'Python Project',
    description: 'A simple eligibility calculator that checks whether a person is eligible to vote based on their age. This project helped me practice conditional statements and basic programming logic.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/varshnikannan-eng/python-programs/upload/main',
    codeSnippet: `# Voting Eligibility Checker in Python
def check_voting_eligibility(age):
    VOTING_AGE = 18
    if age >= VOTING_AGE:
        return f"Eligible to vote! You are {age} years old."
    else:
        years_left = VOTING_AGE - age
        return f"Not eligible yet. You need {years_left} more year(s) to vote."`,
    interactiveType: 'voting'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: 'Starting My Journey',
    description: 'Started my B.Tech Computer Science Engineering journey.',
    status: 'completed'
  },
  {
    step: 2,
    title: 'Learning Python',
    description: 'Building programming fundamentals with Python.',
    status: 'completed'
  },
  {
    step: 3,
    title: 'Exploring Web Development',
    description: 'Learning the fundamentals of HTML, CSS, and JavaScript.',
    status: 'in-progress'
  },
  {
    step: 4,
    title: 'Exploring Generative AI',
    description: 'Experimenting with beginner-level Generative AI projects.',
    status: 'in-progress'
  },
  {
    step: 5,
    title: 'Future Goal',
    description: 'Continue learning and gradually develop the skills required to become an AI Engineer.',
    status: 'future'
  }
];

export const GOAL_AREAS: GoalArea[] = [
  {
    id: 'goal-learn',
    title: 'Learn',
    tagline: 'Continuous Foundation',
    description: 'Continuously strengthen my programming and computer science fundamentals.',
    iconName: 'BookOpen'
  },
  {
    id: 'goal-build',
    title: 'Build',
    tagline: 'Practical Projects',
    description: 'Create practical projects using AI and software technologies.',
    iconName: 'Cpu'
  },
  {
    id: 'goal-grow',
    title: 'Grow',
    tagline: 'Career Path',
    description: 'Develop the knowledge and skills required for a career in Artificial Intelligence.',
    iconName: 'TrendingUp'
  }
];
