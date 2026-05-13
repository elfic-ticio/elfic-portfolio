import type { Translations } from './es'

export const en: Translations = {
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    tag: 'Available for remote work',
    sub: 'Building SaaS, APIs and web experiences\nthat work in production',
  },
  projects: {
    label: 'PROJECTS',
    statusLive: 'Live',
    statusAlpha: 'In development · Alpha',
    featured: 'Featured project',
    testingBadge: '141 E2E tests',
    testing: 'E2E coverage of critical flows — authentication, Wompi payments and bookings — with Playwright.',
  },
  projectData: {
    glowsuite: {
      description: 'Complete SaaS for salon and barbershop management. Smart scheduling, point of sale, inventory control, client and team management. FREE / BASIC / PRO plans with Wompi payments. Online bookings, public storefront and multi-tenant admin panel.',
      tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Wompi', 'Tailwind', 'PWA'],
    },
    mermaweb: {
      label: 'E-commerce · Liquor Sales · Full-Stack',
      type: 'E-commerce · Liquor Sales · Full-Stack',
      description: 'Surplus liquor sales platform — bottles with cosmetic defects that fail quality control. Frontend with cart, invoicing and real-time auctions. REST backend with Prisma + PostgreSQL, auction engine, inventory and shipping guide management. Integrated AI chatbot for sales and support.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'REST API', 'Auctions', 'AI Chatbot', 'WebSockets'],
    },
    cvmatch: {
      label: 'AI · CV Analysis',
      type: 'SaaS · AI-Powered · Full-Stack',
      description: 'AI-powered CV analyzer. Upload your CV as PDF, paste the job posting and get a compatibility score, matched skills, detected gaps and 3 concrete suggestions. Analysis history and personal metrics dashboard.',
      tags: ['Gemini 2.0 Flash', 'PDF parsing', 'Score 0-100', 'Google Auth + Magic Link', 'History', 'Dashboard', 'Prisma + PostgreSQL', 'Vercel Blob'],
    },
    docs2md: {
      label: 'Tool · Open Source',
      type: 'Utility · Conversion · 100% Client-Side',
      description: 'Document to Markdown converter that runs entirely in the browser. No server, no registration, your files never leave your machine. Supports PDF, Word, Excel, PowerPoint, CSV, JSON, HTML and 30+ more formats.',
      tags: ['30+ formats', '100% client-side', 'No backend', 'PDF · DOCX · XLSX · PPTX', 'CSV · JSON · HTML', 'Source code (.py .js .ts...)', 'No registration'],
    },
  },
  stats: [
    { num: '4', label: 'Projects in production' },
    { num: '141', label: 'E2E tests passing' },
    { num: '2', label: 'Projects with AI integrated' },
    { num: '30+', label: 'Formats in Office2MD' },
  ],
  about: {
    label: 'About',
    sectionTitle: 'I build products,\nnot just code',
    focusLabel: 'Focus areas',
    p1: 'Full-stack developer focused on the complete product: from database design to the end-user experience. I work primarily with the TypeScript + Next.js ecosystem.',
    p2: "I've launched SaaS with real payments, implemented E2E test suites with 141+ tests, and architected multi-tenant systems. I work remotely, deliver with documentation and test coverage.",
    p3: 'Currently available for freelance projects and remote positions.',
    stackLabel: 'Stack & skills',
    catBackend: 'Backend & database',
    catServices: 'Services & deployment',
    testingSkills: ['Playwright E2E', 'Strict TypeScript', 'Suite 141+ tests', 'Auth flows', 'Payment tests', 'Automated CI', 'ISTQB CTFL v4.0.1 standard'],
    deploySkills: ['Vercel', 'Blob Storage', 'Resend', 'Wompi', 'Git + GitHub', 'Continuous deploy'],
    skillsLabel: 'Evidence by technology — applied in production',
    evidence: [
      { tech: 'Next.js 14 + TypeScript', proof: 'Used in', highlight: ' 6 production projects', rest: ' — full-stack, App Router, API Routes in the same repo' },
      { tech: 'Prisma + PostgreSQL', proof: 'Multi-tenant schemas in ', highlight: 'GlowSuite', rest: ' — Neon serverless, migrations in production' },
      { tech: 'Real payments (Wompi)', proof: '', highlight: '1 SaaS', rest: ' with real payments in production — FREE/BASIC/PRO plans with Wompi webhooks' },
      { tech: 'NextAuth v5', proof: 'JWT auth with ', highlight: 'Edge Runtime', rest: ' — multi-role sessions: admin, team, end client' },
      { tech: 'PWA', proof: 'GlowSuite installable as app — Serwist, ', highlight: 'works offline', rest: '' },
      { tech: 'Complex e-commerce', proof: 'Auctions, cart, shipping and ', highlight: 'AI chatbot', rest: ' integrated in MermaWeb' },
    ],
    testingPassing: '141 / 142 passing',
    testingStats: [
      { num: '142', label: 'Tests written' },
      { num: '99%', label: 'Success rate' },
      { num: '3', label: 'Critical flows' },
      { num: 'E2E', label: 'Auth · Payments · Bookings' },
    ],
    testingNote: 'Familiar with ISTQB CTFL v4.0.1 standard — testing fundamentals, test levels, design techniques and defect management',
  },
  contact: {
    label: 'Contact',
    sectionTitle: 'CONTACT',
    title: 'Got a project?',
    titleAccent: "Let's talk.",
    sub: 'Available for remote work, contracts and freelance projects. I reply within 24 hours.',
  },
  footer: 'Built with Next.js 14 + TypeScript',
}
