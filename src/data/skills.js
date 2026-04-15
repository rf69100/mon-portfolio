export const SKILL_COLOR_BY_TITLE = {
  FRONTEND: 'purple',
  BACKEND: 'blue',
  'BASE DE DONNÉES': 'green',
  'OUTILS & SYSTEMES': 'yellow',
};

export const skills = [
  {
    title: 'FRONTEND',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    techs: [
      { name: 'React', icon: 'react' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Angular', icon: 'angular' },
    ],
  },
  {
    title: 'BACKEND',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    techs: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Python', icon: 'python' },
      { name: 'Node.js', icon: 'nodejs' },
    ],
  },
  {
    title: 'BASE DE DONNÉES',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    techs: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MariaDB', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    title: 'OUTILS & SYSTEMES',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    techs: [
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Windows', icon: 'windows' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Jira', icon: 'jira' },
    ],
  },
];

export const skillsCardStyles = {
  purple:
    'bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/60 shadow-purple-500/40',
  blue:
    'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/60 shadow-blue-500/40',
  green:
    'bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/60 shadow-green-500/40',
  yellow:
    'bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-2 border-yellow-500/60 shadow-yellow-500/40',
};

export const skillsTitleColors = {
  purple: 'text-purple-300',
  blue: 'text-blue-300',
  green: 'text-green-300',
  yellow: 'text-yellow-300',
};
