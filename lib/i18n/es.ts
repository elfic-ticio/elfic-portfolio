export const es = {
  nav: {
    projects: 'proyectos',
    about: 'sobre mí',
    contact: 'contacto',
  },
  hero: {
    tag: 'disponible para trabajo remoto',
    sub: 'Construyendo SaaS, APIs y experiencias\nweb que funcionan en producción.',
  },
  projects: {
    label: 'PROYECTOS',
    statusLive: 'En producción',
    statusAlpha: 'En desarrollo · Alfa',
    featured: 'FEATURED',
    testingBadge: '141 tests E2E',
    testing: 'Cobertura de flujos críticos — autenticación, pagos Wompi y reservas — con Playwright.',
  },
  projectData: {
    glowsuite: {
      description: 'SaaS completo para gestión de salones y barberías. Agenda inteligente, punto de venta, control de inventario, gestión de clientes y equipo. Planes FREE / BASIC / PRO con pagos Wompi. Reservas online, vitrina pública y panel admin multi-tenant.',
      tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Wompi', 'Tailwind', 'PWA'],
    },
    mermaweb: {
      label: 'E-commerce · Venta de licores · Full-Stack',
      type: 'E-commerce · Venta de licores · Full-Stack',
      description: 'Plataforma de venta de merma — botellas con defectos cosméticos que no pasan control de calidad. Frontend con carrito, facturación y subastas en tiempo real. Backend REST con Prisma + PostgreSQL, motor de subastas, inventario y gestión de guías de envío. Chatbot IA integrado para ventas y soporte.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'REST API', 'Subastas', 'Chatbot IA', 'WebSockets'],
    },
    cvmatch: {
      label: 'IA · Análisis de CVs',
      type: 'SaaS · AI-Powered · Full-Stack',
      description: 'Analizador de CVs con IA. Sube tu CV en PDF, pega la oferta de trabajo y obtén un score de compatibilidad, skills que coinciden, gaps detectados y 3 sugerencias concretas. Historial de análisis y dashboard con métricas personales.',
      tags: ['Gemini 2.0 Flash', 'PDF parsing', 'Score 0-100', 'Auth Google + Magic Link', 'Historial', 'Dashboard', 'Prisma + PostgreSQL', 'Vercel Blob'],
    },
    docs2md: {
      label: 'Herramienta · Open Source',
      type: 'Utilidad · Conversión · 100% Client-Side',
      description: 'Conversor de documentos a Markdown que corre completamente en el navegador. Sin servidor, sin registro, sin que tus archivos salgan de tu equipo. Soporta PDF, Word, Excel, PowerPoint, CSV, JSON, HTML y 30+ formatos más.',
      tags: ['30+ formatos', '100% client-side', 'Sin backend', 'PDF · DOCX · XLSX · PPTX', 'CSV · JSON · HTML', 'Código fuente (.py .js .ts...)', 'Sin registro'],
    },
  },
  stats: [
    { num: '4', label: 'Proyectos en producción' },
    { num: '141', label: 'Tests E2E pasando' },
    { num: '2', label: 'Proyectos con IA integrada' },
    { num: '30+', label: 'Formatos soportados en Office2MD' },
  ],
  about: {
    label: 'sobre mí',
    sectionTitle: 'SOBRE MÍ',
    focusLabel: 'Áreas de enfoque',
    p1: 'Soy un desarrollador FullStack enfocado en construir productos que funcionan en producción. Me especializo en el ecosistema TypeScript — desde APIs robustas hasta interfaces rápidas y accesibles.',
    p2: 'He lanzado SaaS con pagos reales, implementado suites de testing E2E con 141+ tests y arquitectado sistemas multi-tenant. Trabajo de forma remota, entrego con documentación y cobertura de tests.',
    p3: 'Actualmente disponible para proyectos freelance y posiciones remotas.',
    stackLabel: 'Stack & habilidades',
    catBackend: 'Backend & base de datos',
    catServices: 'Servicios & despliegue',
    testingSkills: ['Playwright E2E', 'TypeScript estricto', 'Suite 141+ tests', 'Flujos de auth', 'Tests de pago', 'CI automatizado', 'Estándar ISTQB CTFL v4.0.1'],
    deploySkills: ['Vercel', 'Blob Storage', 'Resend', 'Wompi', 'Git + GitHub', 'Deploy continuo'],
    skillsLabel: 'Evidencia por tecnología — aplicado en producción',
    evidence: [
      { tech: 'Next.js 14 + TypeScript', proof: 'Usado en', highlight: ' 6 proyectos en producción', rest: ' — full-stack, App Router, API Routes en el mismo repo' },
      { tech: 'Prisma + PostgreSQL', proof: 'Esquemas multi-tenant en ', highlight: 'GlowSuite', rest: ' — Neon serverless, migraciones en producción' },
      { tech: 'Pagos reales (Wompi)', proof: '', highlight: '1 SaaS', rest: ' con pagos reales en producción — planes FREE/BASIC/PRO con webhooks Wompi' },
      { tech: 'NextAuth v5', proof: 'Auth JWT con ', highlight: 'Edge Runtime', rest: ' — sesiones multi-rol: admin, equipo, cliente final' },
      { tech: 'PWA', proof: 'GlowSuite instalable como app — Serwist, ', highlight: 'funciona offline', rest: '' },
      { tech: 'E-commerce complejo', proof: 'Subastas, carrito, envíos y ', highlight: 'chatbot IA', rest: ' integrado en MermaWeb' },
    ],
    testingPassing: '141 / 142 pasando',
    testingStats: [
      { num: '142', label: 'Tests escritos' },
      { num: '99%', label: 'Tasa de éxito' },
      { num: '3', label: 'Flujos críticos' },
      { num: 'E2E', label: 'Auth · Pagos · Reservas' },
    ],
    testingNote: 'Conocimiento del estándar ISTQB CTFL v4.0.1 — fundamentos de testing, niveles, técnicas de diseño de pruebas y gestión de defectos.',
  },
  contact: {
    label: 'contacto',
    sectionTitle: 'CONTACTO',
    title: '¿Tienes un proyecto?',
    titleAccent: 'Hablemos.',
    sub: 'Disponible para trabajo remoto, contratos y proyectos freelance.\nRespondo en menos de 24 horas.',
  },
  footer: '© 2026 — Next.js 14 + TypeScript',
}

export type Translations = typeof es
