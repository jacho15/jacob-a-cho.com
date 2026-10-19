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
    description: 'Scan your room into 3D and shop for furniture that actually fits, with AI agents that can only buy what you approve.',
    badge: '1st Place Applied Intelligence Track - UCLA AI Hackathon',
  },
  {
    name: 'Chilly Ship',
    category: 'hackathon',
    description: 'Compressed a satellite image classifier to 88% smaller and 5× faster while losing under half a point of accuracy.',
    badge: '2nd Place Software Track - IEEE Minimalist AI Hackathon',
  },
  {
    name: 'JacobOS',
    category: 'personal',
    link: 'https://jacho15.github.io/JacobOS/',
    description: 'Baremetal OS built with C and Assembly.',
  },
  {
    name: '2048 on FPGA',
    category: 'personal',
    link: 'https://github.com/jacho15/ee354-final-project-2048',
    description: 'A hardware implementation of the classic 2048 puzzle game in Verilog, featuring VGA display output and accelerometer-based tilt controls.',
  },
  {
    name: 'Muffin Time',
    category: 'personal',
    link: 'https://muffin-time.vercel.app/',
    description: 'Productivity app with pomodoro and time tracking while combining Notion and Google calendar for event tracking.'
  },
  {
    name: 'amy',
    category: 'hackathon',
    link: 'https://devpost.com/software/feesh',
    description: 'Amy (amygdala) is the empathy layer that gives vision-language models human-centered data so people stop deciding with half the picture.',
    badge: '1st IFM K2 AI & 1st MLH Vultr Tracks - HackTech by Caltech 2026',
  },
  {
    name: 'Nucleus',
    category: 'hackathon',
    link: 'https://devpost.com/software/nucleus-3lgfki',
    description: 'Real-time hospital dashboard that consolidates patient data and clinical alerts, enabling nurses to manage entire floors with automated early warning scoring and smart triage.',
    badge: '1st Overall - SoCal Claude Builder Club Hackathon',
  },
  {
    name: 'Flavor Fetch',
    category: 'hackathon',
    link: 'https://devpost.com/software/flavorfetch',
    description: 'AI-powered recipe app that suggests recipes and automatically orders their ingredients.',
    badge: '1st Place Dain AI Track - SoCal Tech Week 2024',
  },
]
