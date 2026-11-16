export interface Project {
  name: string
  link?: string
  description: string
  badge?: string
  category: 'hackathon' | 'personal'
}

export const projects: Project[] = [
  {
    name: 'Otto',
    category: 'hackathon',
    link: 'https://devpost.com/software/otto-zslcf2',
    description: '3D room scan, agentic furniture shopping',
    badge: '1st Place Applied Intelligence Track - AI Hackathon by LA Hacks 2026',
  },
  {
    name: 'Chilly Ship',
    category: 'hackathon',
    description: 'Satellite classifier, 88% smaller, 5× faster',
    badge: '2nd Place Software Track - Minimalist Edge AI Competition (ACM/IEEE SEC) 2026',
  },
  {
    name: 'UNO Q Pipeline',
    category: 'personal',
    description: 'Motion-wake camera, 49% less energy',
  },
  {
    name: 'JacobOS',
    category: 'personal',
    link: 'https://jacho15.github.io/JacobOS/',
    description: 'Baremetal OS in C and Assembly',
  },
  {
    name: '2048 on FPGA',
    category: 'personal',
    link: 'https://github.com/jacho15/ee354-final-project-2048',
    description: '2048 in Verilog, tilt controls',
  },
  {
    name: 'Muffin Time',
    category: 'personal',
    link: 'https://muffin-time.vercel.app/',
    description: 'Pomodoro, Notion, Google Calendar'
  },
  {
    name: 'amy',
    category: 'hackathon',
    link: 'https://devpost.com/software/feesh',
    description: 'Empathy layer for vision-language models',
    badge: '1st IFM K2 AI & 1st MLH Vultr Tracks - HackTech by Caltech 2026',
  },
  {
    name: 'Nucleus',
    category: 'hackathon',
    link: 'https://devpost.com/software/nucleus-3lgfki',
    description: 'Real-time hospital dashboard',
    badge: '1st Overall - SoCal Claude Builder Club Hackathon',
  },
  {
    name: 'Flavor Fetch',
    category: 'hackathon',
    link: 'https://devpost.com/software/flavorfetch',
    description: 'AI recipes, auto-ordered ingredients',
    badge: '1st Place Dain AI Track - SoCal Tech Week 2024',
  },
]
