import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '$10M+', label: 'Transaction Volume' },
  { value: '3',     label: 'Live Products'       },
  { value: '5+',    label: 'Years Experience'    },
  { value: '3',     label: 'Company Roles'       },
];

const navLinks = [
  { href: '#experience',  label: 'Experience'      },
  { href: '#projects',    label: 'Projects'        },
  { href: '#skills',      label: 'Skills'          },
  { href: '#certs',       label: 'Certifications'  },
  { href: '#contact',     label: 'Contact'         },
];

const experience = [
  {
    role: 'AI Infrastructure & Platform Engineering Contractor',
    company: 'Confidential U.S. AI Company (via Mercor)',
    period: '2025 – Present',
    type: 'Contract',
    current: true,
    bullets: [
      'Built and validated Kubernetes-based infrastructure environments focused on observability, distributed systems, and production reliability.',
      'Worked on infrastructure debugging involving Prometheus, Jaeger, Helm, Chaos Mesh, and Kubernetes clusters.',
      'Automated environment validation workflows and deployment troubleshooting processes.',
      'Contributed to AI-assisted engineering evaluation systems and infrastructure reliability workflows.',
      'Improved reproducibility and operational consistency across containerised environments.',
    ],
    stack: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'Jaeger', 'Bash', 'CI/CD'],
  },
  {
    role: 'Backend Software Engineer',
    company: 'Ordit Technologies Limited (OrditAI)',
    period: 'July 2023 – Present',
    type: 'Full-time',
    current: true,
    bullets: [
      'Developed core accounting infrastructure supporting automated financial statements, ledgers, reconciliation workflows, and trial balances.',
      'Built scalable billing and subscription systems supporting invoicing, payment automation, and plan management.',
      'Implemented secure RBAC systems across accounting and multi-workspace modules.',
      'Collaborated with AI engineering teams to automate accounting workflows and journal entry processing.',
      'Participated in backend architecture decisions for multi-tenant SaaS systems.',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'Docker', 'REST APIs', 'RBAC', 'CI/CD'],
  },
  {
    role: 'Software Engineer',
    company: 'Swipe',
    period: 'April 2021 – February 2023',
    type: 'Full-time',
    current: false,
    bullets: [
      'Built secure payment services collectively processing over $10M in transaction volume.',
      'Contributed to card infrastructure enabling issuance of physical and virtual payment cards through banking API integrations.',
      'Designed and implemented a Buy Now, Pay Later (BNPL) payment gateway for merchant checkout systems.',
      'Integrated multiple third-party payment gateways with secure transaction handling and webhook processing.',
      'Built automated loan collection systems that helped maintain non-performing loans (NPLs) below 1%.',
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Payment APIs', 'Webhooks', 'Docker'],
  },
];

const featuredProjects = [
  {
    title: 'StreamPay',
    badge: { label: 'Live Product', color: 'emerald' },
    desc: 'Multi-tenant creator monetisation & payment platform enabling African creators to receive subscriptions and donations. Architected backend systems for wallets, transactions, withdrawals, analytics, and payment orchestration — with provider abstraction layers, idempotent webhook processing, and automated refund workflows. Delivered as a web app and PWA.',
    github: '',
    demo: 'https://streampay.website',
    tags: ['TypeScript', 'PostgreSQL', 'Payments', 'Webhooks', 'Docker', 'CI/CD', 'PWA'],
  },
  {
    title: 'OpsPilot AI',
    badge: { label: 'AI-Powered', color: 'accent' },
    desc: 'AI-powered alert intelligence platform reducing alert noise by 80–90% through intelligent deduplication, grouping, and root cause analysis. Built on NestJS, OpenAI, PostgreSQL, and Redis with real-time event processing and Slack automation.',
    github: 'https://github.com/sharedee2776/opspilotai',
    demo: '',
    tags: ['NestJS', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Redis', 'Slack'],
  },
];

const otherProjects = [
  {
    title: 'Webhook Monitor SaaS',
    desc: 'Production-grade full-stack SaaS for monitoring, analysing, and managing webhook events — real-time analytics, usage-based billing, multi-tenant support, and Stripe integration.',
    github: 'https://github.com/sharedee2776/webhook-monitor',
    demo: 'http://webhookmonitor.shop',
    tags: ['React', 'TypeScript', 'Azure Functions', 'Stripe', 'Firebase'],
  },
  {
    title: 'Azure Blue-Green CI/CD Pipeline',
    desc: 'Production-ready CI/CD pipeline implementing Blue-Green deployment on Azure App Service with Docker and GitHub Actions — zero-downtime releases and automated health checks.',
    github: 'https://github.com/sharedee2776/azure-blue-green-cicd',
    demo: '',
    tags: ['Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Flask'],
  },
  {
    title: 'DevOps Capstone — Observability Stack',
    desc: 'Enterprise-grade monitoring infrastructure on AWS EC2. Full stack: Prometheus, Grafana, Loki, Promtail, Alertmanager — containerised with Docker Compose and GitHub Actions CI/CD.',
    github: 'https://github.com/sharedee2776/devops-capstone-project',
    demo: '',
    tags: ['FastAPI', 'Docker', 'Prometheus', 'Grafana', 'AWS EC2'],
  },
  {
    title: 'AKS + Terraform on Azure DevOps',
    desc: 'Infrastructure-as-Code pipeline provisioning an Azure Kubernetes Service cluster via Terraform, with full Azure DevOps CI/CD integration — production-grade IaC patterns for cloud-native Kubernetes.',
    github: 'https://github.com/sharedee2776/aks-terraform-azure-devops',
    demo: '',
    tags: ['Terraform', 'Kubernetes', 'Azure', 'Azure DevOps', 'IaC'],
  },
];

const skills = [
  {
    category: 'Backend Engineering',
    icon: '⚙️',
    items: ['REST APIs', 'NestJS · FastAPI · Flask', 'Distributed Systems', 'Payment Systems & Gateways', 'Webhooks & Idempotency', 'Billing & Subscription Platforms', 'Auth & RBAC', 'SaaS / Multi-tenant Architecture'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['Docker & Docker Compose', 'Kubernetes · Helm', 'Azure (Functions, App Service)', 'AWS EC2', 'Terraform · IaC', 'GitHub Actions CI/CD', 'Blue-Green Deployments', 'Infrastructure Automation'],
  },
  {
    category: 'Observability & Data',
    icon: '📊',
    items: ['Prometheus · Grafana', 'Loki · Promtail', 'Jaeger · Chaos Mesh', 'PostgreSQL', 'Relational Data Modelling', 'Query Optimisation', 'Transaction Tracing', 'Alertmanager'],
  },
  {
    category: 'Languages & Tools',
    icon: '🛠',
    items: ['TypeScript · JavaScript', 'Python · SQL · Bash', 'Node.js', 'Git', 'Stripe · Firebase Auth', 'OpenAI API · Redis', 'Linux', 'Postman · REST clients'],
  },
];

const certifications = [
  {
    name: 'Endpoint Security',
    issuer: 'Cisco',
    img: 'https://images.credly.com/size/340x340/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png',
    url: 'https://www.credly.com/badges/286bca95-20fc-4839-8135-167d0d076a4f/public_url',
    tip: 'Network security, operating systems, and endpoint protection',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    img: 'https://images.credly.com/size/340x340/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png',
    url: 'https://www.credly.com/badges/20526041-c06b-429a-8471-835d86d5a5e7/public_url',
    tip: 'Network types, how devices send/receive data',
  },
  {
    name: 'Networking Devices & Config',
    issuer: 'Cisco',
    img: 'https://images.credly.com/size/340x340/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png',
    url: 'https://www.credly.com/badges/cbb4d5d1-ecf4-4883-bd58-b2da1cab2697/public_url',
    tip: 'Hands-on skills with Cisco devices',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    img: 'https://images.credly.com/size/340x340/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png',
    url: 'https://www.credly.com/badges/a6b09e78-770a-4a3b-af6e-a5c08e053a2e/public_url',
    tip: 'Python programming fundamentals',
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    img: 'https://images.credly.com/size/340x340/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob',
    url: 'https://www.credly.com/badges/18a86065-3326-4c81-bb55-3d5196233641/public_url',
    tip: 'AI and machine learning fundamentals',
  },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

// ─── Badge component ──────────────────────────────────────────────────────────

function Badge({ label, color }) {
  const cls = {
    emerald: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    accent:  'bg-indigo-500/15 text-indigo-400 border border-indigo-400/30',
    primary: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
  }[color] || 'bg-sky-500/15 text-sky-400 border border-sky-500/30';
  return (
    <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>
      {label}
    </span>
  );
}

// ─── Tag chip ─────────────────────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      {children}
    </span>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme-dark');
    return stored ? JSON.parse(stored) : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme-dark', JSON.stringify(darkMode));
  }, [darkMode]);

  // Close menu on resize
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">

        {/* ── Navigation ────────────────────────────────────────────────────── */}
        <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            <span className="font-bold text-base tracking-tight" style={{ color: 'var(--primary)' }}>
              Adedamola Dauda
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 flex flex-col gap-4"
              >
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--primary)] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="hero-bg relative">
          <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16 md:pt-24 md:pb-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

              {/* Left: text */}
              <motion.div className="flex-1 max-w-2xl" {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new opportunities
                </span>

                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  <span className="block text-slate-900 dark:text-white">Adedamola</span>
                  <span className="gradient-text">Dauda</span>
                </h1>

                <p className="mt-3 text-lg font-semibold" style={{ color: 'var(--primary)' }}>
                  Backend & Platform Engineer
                </p>

                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  Building fintech infrastructure, payment systems, and cloud-native platforms
                  that ship to production and scale reliably. Based in Warsaw, Poland.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                  >
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <a
                    href="/Adedamola_Dauda_Updated_CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-[var(--border)] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all"
                  >
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <a href="mailto:damoladauda10@gmail.com" className="hover:text-[var(--primary)] transition-colors flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    damoladauda10@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/adedamola-dauda" target="_blank" rel="noreferrer" className="hover:text-[var(--primary)] transition-colors flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/sharedee2776" target="_blank" rel="noreferrer" className="hover:text-[var(--primary)] transition-colors flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                    GitHub
                  </a>
                </div>
              </motion.div>

              {/* Right: avatar */}
              <motion.div
                className="flex-shrink-0 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <img
                    src="/preview.png"
                    alt="Adedamola Dauda"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover avatar-ring"
                  />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-[var(--border)] text-slate-600 dark:text-slate-300 whitespace-nowrap shadow-sm">
                    Warsaw, Poland
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Stats bar */}
            <motion.div
              className="mt-14 pt-8 border-t border-[var(--border)] grid grid-cols-2 md:grid-cols-4 gap-6"
              {...fadeUp(0.3)}
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-black gradient-text leading-none">{value}</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-24 space-y-20 pt-16">

          {/* ── Work Experience ──────────────────────────────────────────────── */}
          <section id="experience">
            <SectionHeading>Work Experience</SectionHeading>
            <div className="relative pl-10">
              {/* Vertical timeline line */}
              <div className="timeline-line" />

              <div className="space-y-6">
                {experience.map((job, i) => (
                  <motion.div key={job.company} {...fadeUp(i * 0.1)}>
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 w-10 flex items-start justify-center"
                      style={{ top: `${i === 0 ? 0 : 'auto'}` }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 mt-5 flex-shrink-0 ${
                          job.current
                            ? 'border-[var(--primary)] bg-[var(--primary)]/20'
                            : 'border-slate-400 dark:border-slate-600 bg-[var(--surface)]'
                        }`}
                        style={{ marginLeft: '-3px' }}
                      />
                    </div>

                    <div
                      className={`bg-[var(--surface)] rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
                        job.current ? 'border-[var(--primary)]/30' : 'border-[var(--border)]'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                            {job.role}
                          </h3>
                          <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--primary)' }}>
                            {job.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs text-slate-500 dark:text-slate-400">{job.period}</span>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            job.current
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}>
                            {job.current ? '● ' : ''}{job.type}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--primary)' }} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Featured Projects ────────────────────────────────────────────── */}
          <section id="projects">
            <SectionHeading>Featured Projects</SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <motion.article
                  key={p.title}
                  {...fadeUp(i * 0.1)}
                  className="card-featured bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                    {p.badge && <Badge label={p.badge.label} color={p.badge.color} />}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[var(--primary)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                        Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Other projects */}
            <h3 className="mt-12 text-lg font-bold text-slate-900 dark:text-white mb-4">Other Projects</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {otherProjects.map((p, i) => (
                <motion.article
                  key={p.title}
                  {...fadeUp(i * 0.08)}
                  className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</h4>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[var(--primary)] transition-colors flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        View on GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ── Skills ───────────────────────────────────────────────────────── */}
          <section id="skills">
            <SectionHeading>Skills</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map(({ category, icon, items }, i) => (
                <motion.div
                  key={category}
                  {...fadeUp(i * 0.08)}
                  className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{icon}</span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--primary)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Certifications ───────────────────────────────────────────────── */}
          <section id="certs">
            <SectionHeading>Certifications</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {certifications.map(({ name, issuer, img, url, tip }, i) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={tip}
                  {...fadeUp(i * 0.07)}
                  className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="mt-3 text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">{name}</span>
                  <span className="mt-1 text-xs text-slate-400">{issuer}</span>
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-sm text-center text-slate-500 dark:text-slate-400">
              All badges verified on{' '}
              <a
                href="https://www.credly.com/users/adedamola-dauda/badges"
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:underline"
                style={{ color: 'var(--primary)' }}
              >
                Credly
              </a>
            </p>
          </section>

          {/* ── Contact ──────────────────────────────────────────────────────── */}
          <section id="contact">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
              {/* Top accent strip */}
              <div className="h-1.5" style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />

              <div className="bg-[var(--surface)] p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight text-center">
                    Let's work together
                  </h2>
                  <p className="mt-2 text-center text-slate-500 dark:text-slate-400 text-sm">
                    Open to backend, platform engineering, and fintech infrastructure roles — remote or Warsaw-based.
                  </p>

                  <div className="mt-6 flex justify-center flex-wrap gap-4">
                    <a
                      href="mailto:damoladauda10@gmail.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Send an Email
                    </a>
                    <a
                      href="https://linkedin.com/in/adedamola-dauda"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-[var(--border)] text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  <div className="mt-10 border-t border-[var(--border)] pt-8">
                    <p className="text-xs text-center text-slate-400 mb-6 font-medium uppercase tracking-wider">Or drop a message</p>
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                      <input type="hidden" name="access_key" value="79d9a523-e7c0-43a3-b0c1-7d5394c642eb" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          className="w-full px-4 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--surface-2)] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                          style={{ '--tw-ring-color': 'var(--primary)' }}
                          type="text" name="name" placeholder="Your name" required
                        />
                        <input
                          className="w-full px-4 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--surface-2)] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                          type="email" name="email" placeholder="Your email" required
                        />
                      </div>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg text-sm border border-[var(--border)] bg-[var(--surface-2)] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
                        name="message" placeholder="Tell me about your project or role..." rows="5" required
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg"
                        style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <footer className="border-t border-[var(--border)] py-8">
          <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} Adedamola Dauda — Backend & Platform Engineer</span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/sharedee2776" target="_blank" rel="noreferrer" className="hover:text-[var(--primary)] transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/adedamola-dauda" target="_blank" rel="noreferrer" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
              <a href="mailto:damoladauda10@gmail.com" className="hover:text-[var(--primary)] transition-colors">Email</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
