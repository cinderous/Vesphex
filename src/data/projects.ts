export type ProjectStatus = 'IN DEVELOPMENT' | 'EXPERIMENTAL' | 'ACTIVE' | 'DORMANT';

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'deadlock-command-center',
    name: 'DEADLOCK COMMAND CENTER',
    status: 'IN DEVELOPMENT',
    category: 'GAME INTELLIGENCE',
    summary: 'Competitive game intelligence, coaching, automation, and analytics.',
    description:
      'A workspace for treating Deadlock as a system: information, decisions, and the tools that connect them. The command center is being assembled in public. No fabricated records. No borrowed glory.',
    tags: ['Deadlock', 'Analytics', 'Automation', 'Coaching'],
  },
  {
    slug: 'symplectura',
    name: 'SYMPLECTURA',
    status: 'EXPERIMENTAL',
    category: 'SYSTEMS ARCHITECTURE',
    summary: 'Experimental game / systems architecture project.',
    description:
      'An experiment in how games and system architecture inform each other. Structure first. Spectacle later. The work is early, and it will stay honest about that.',
    tags: ['Game Design', 'Architecture', 'Simulation'],
  },
  {
    slug: 'network-systems',
    name: 'NETWORK SYSTEMS',
    status: 'ACTIVE',
    category: 'INFRASTRUCTURE',
    summary: 'Tools for connecting people, software, domains, and communities.',
    description:
      'Infrastructure and interfaces for linking operators, software, and digital territory. Built as needed — not as a platform pitch, and not as a promise of scale that has not been earned.',
    tags: ['Networks', 'Domains', 'Community', 'Tooling'],
  },
  {
    slug: 'ai-automation',
    name: 'AI / AUTOMATION',
    status: 'EXPERIMENTAL',
    category: 'AUTOMATION',
    summary: 'Experiments involving intelligent agents, bots, workflows, and automation.',
    description:
      'Practical experiments in agents, bots, and workflow automation. The goal is leverage: fewer brittle steps, clearer systems, more time for the work that actually requires judgment.',
    tags: ['Agents', 'Workflows', 'Bots', 'Tooling'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
