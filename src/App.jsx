import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Webhook Monitor SaaS",
    desc: "Full-stack SaaS platform for monitoring, analyzing, and managing webhook events with real-time analytics, usage-based billing, and multi-tenant support. Built with React, Azure Functions, Firebase Auth, and Stripe.",
    github: "https://github.com/sharedee2776/webhook-monitor",
    demo: "http://webhookmonitor.shop",
    tags: ["React", "TypeScript", "Azure Functions", "Stripe", "Firebase"]
  },
  {
    title: "Azure Blue-Green CI/CD Pipeline",
    desc: "Production-ready CI/CD pipeline implementing Blue-Green deployment on Azure App Service with Docker and GitHub Actions, featuring zero-downtime releases and automated health checks.",
    github: "https://github.com/sharedee2776/azure-blue-green-cicd",
    demo: "",
    tags: ["Azure", "Docker", "GitHub Actions", "CI/CD", "Flask"]
  },
  {
    title: "DevOps Capstone — Monitoring & CI/CD",
    desc: "FastAPI app containerized with Docker, GitHub Actions CI/CD, pushed to Docker Hub; full observability with Prometheus, Grafana, Loki, Promtail; deployed on AWS EC2.",
    github: "https://github.com/sharedee2776/devops-capstone-project",
    demo: "",
    tags: ["FastAPI", "Docker", "Prometheus", "Grafana", "AWS"]
  },
  {
    title: "Global Weather & Air Quality Analytics",
    desc: "ETL pipeline aggregating weather & AQI from multiple APIs, SQLite DB, EDA and dashboard-ready data modeling.",
    github: "https://github.com/sharedee2776/Global-Weather-Air-Quality-Analytics-Dashboard",
    tags: ["Python", "APIs", "SQLite", "ETL"]
  },
  {
    title: "Weather Forecast Web App",
    desc: "Flask-based weather app using OpenWeather API, deployed with Gunicorn on Render.",
    github: "https://github.com/sharedee2776/Weather_app_project",
    demo: "https://weather-app-project-mswz.onrender.com",
    tags: ["Flask", "Deployment"]
  },
  {
    title: "Bike Sales Revenue Analysis",
    desc: "Data cleaning and dashboards in Excel & Tableau to showcase revenue trends.",
    github: "https://github.com/sharedee2776/Data-analytics-portfolio/tree/main/bike-sales-revenue",
    tags: ["Tableau", "Data Analysis"]
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme-dark');
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme-dark', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
          <span className="font-bold text-lg text-[var(--primary)]">Adedamola Dauda</span>
          <div className="space-x-4 text-sm font-medium">
            <a href="#profile" className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded transition-colors" tabIndex={0}>Profile</a>
            <a href="#projects" className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded transition-colors" tabIndex={0}>Projects</a>
            <a href="#skills" className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded transition-colors" tabIndex={0}>Skills</a>
            <a href="#certifications" className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded transition-colors" tabIndex={0}>Certifications</a>
            <a href="#contact" className="hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded transition-colors" tabIndex={0}>Contact</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <header id="profile" className="max-w-5xl mx-auto p-6 md:p-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">Adedamola Dauda</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Full-Stack & DevOps Engineer</p>
              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                <a className="mr-4 hover:underline" href="mailto:Damoladauda10@gmail.com">Damoladauda10@gmail.com</a>
                <a className="mr-4 hover:underline" href="https://linkedin.com/in/adedamola-dauda" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:underline" href="https://github.com/sharedee2776" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <a href="#projects" className="inline-block bg-[var(--accent)] text-white px-4 py-2 rounded shadow">View projects</a>
              <a href="/Adedamola_Dauda_Updated_CV.pdf" className="inline-block ml-3 border border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded">Download CV</a>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 md:flex md:items-center">
            <div className="md:flex-1">
              <h2 className="text-2xl font-semibold text-[var(--primary)]">Profile</h2>
              <p className="mt-3 text-gray-700 dark:text-gray-200 leading-relaxed">
                Full-Stack & DevOps Engineer with proven expertise in building and deploying production-grade SaaS applications. Successfully deployed a live multi-tenant webhook monitoring platform with real-time analytics, Stripe billing integration, and serverless architecture on Azure. Experienced in full-stack development (React/TypeScript + Azure Functions), CI/CD automation, containerization, cloud deployment (AWS, Azure), and comprehensive observability solutions. I architect scalable systems, implement robust DevOps practices, and deliver end-to-end solutions from frontend to production deployment.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-200">
                <li><strong>Languages:</strong> Python, TypeScript, JavaScript</li>
                <li><strong>Frontend:</strong> React, Vite, Modern UI/UX</li>
                <li><strong>Backend:</strong> Azure Functions, FastAPI, Flask</li>
                <li><strong>DevOps:</strong> Docker, GitHub Actions, CI/CD</li>
                <li><strong>Cloud:</strong> Azure (Functions, Static Web Apps, Blob Storage), AWS EC2</li>
                <li><strong>SaaS:</strong> Stripe, Firebase Auth, Multi-tenant Architecture</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana, Loki</li>
                <li><strong>Databases:</strong> Azure Storage, SQLite, CosmosDB</li>
              </ul>
            </div>
            <div className="md:w-48 mt-6 md:mt-0 md:ml-8 text-center">
              <img src="/preview.png" alt="Adedamola Dauda" className="w-36 h-36 rounded-full object-cover mx-auto" />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Poland · Open to Full-Stack & DevOps roles</p>
            </div>
          </section>
          <section id="projects" className="mt-10">
            <h3 className="text-xl font-semibold text-[var(--primary)]">Selected Projects</h3>
            <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
                {projects.map((p) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 border rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[var(--primary)] transition-colors">{p.title}</h4>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] dark:bg-[var(--accent)]/20 dark:text-[var(--accent)] rounded-full font-medium shadow-sm">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-[var(--primary)] hover:underline font-semibold">View on GitHub</a>
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm bg-[var(--accent)] text-white px-4 py-1.5 rounded-lg shadow hover:bg-[var(--primary)] transition">Live demo</a>}
                    </div>
                  </motion.article>
                ))}
            </div>
          </section>
          <section id="skills" className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[var(--primary)]">Skills</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-200">
              <div>
                <h5 className="font-semibold">Frontend</h5>
                <ul className="mt-2">
                  <li>React + TypeScript</li>
                  <li>Vite</li>
                  <li>Modern UI/UX</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Backend & APIs</h5>
                <ul className="mt-2">
                  <li>Azure Functions</li>
                  <li>Python / FastAPI</li>
                  <li>Flask</li>
                  <li>REST APIs</li>
                  <li>Serverless Architecture</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Cloud & DevOps</h5>
                <ul className="mt-2">
                  <li>Azure (Functions, Static Web Apps)</li>
                  <li>AWS EC2</li>
                  <li>Docker, Docker Compose</li>
                  <li>GitHub Actions CI/CD</li>
                  <li>Infrastructure as Code</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">SaaS & Monitoring</h5>
                <ul className="mt-2">
                  <li>Stripe Integration</li>
                  <li>Firebase Auth</li>
                  <li>Multi-tenant Architecture</li>
                  <li>Prometheus, Grafana</li>
                  <li>Loki, Promtail</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Certifications Section */}
          <section id="certifications" className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Example badges, replace src/href with your actual Credly badge links */}
              <a href="https://www.credly.com/badges/6e2e7b2e-aws-solutions-architect" target="_blank" rel="noreferrer" className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-lg transition">
                <img src="https://images.credly.com/size/220x220/images/684f6b2c-76a7-4d47-8c1f-5e6e3c6a6a3a/image.png" alt="AWS Solutions Architect" className="w-20 h-20 mb-2" />
                <span className="font-medium text-sm text-center">AWS Certified Solutions Architect</span>
              </a>
              <a href="https://www.credly.com/badges/123456-azure-admin" target="_blank" rel="noreferrer" className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-lg transition">
                <img src="https://images.credly.com/size/220x220/images/63316b60-f62d-4c1b-9b2b-3b3b2c7b5c8a/image.png" alt="Azure Administrator" className="w-20 h-20 mb-2" />
                <span className="font-medium text-sm text-center">Microsoft Azure Administrator Associate</span>
              </a>
              <a href="https://www.credly.com/badges/abcdef-kubernetes" target="_blank" rel="noreferrer" className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-lg transition">
                <img src="https://images.credly.com/size/220x220/images/8e0c9c1a-7c7a-4b7a-8c7a-7c7a8c7a8c7a/image.png" alt="Kubernetes and Cloud Native Associate" className="w-20 h-20 mb-2" />
                <span className="font-medium text-sm text-center">Kubernetes and Cloud Native Associate</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">See all badges on <a href="https://www.credly.com/users/adedamola-dauda/badges" className="text-[var(--primary)] hover:underline" target="_blank" rel="noreferrer">Credly</a>.</p>
          </section>
          <section id="contact" className="mt-12 text-center">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Email me at <a className="text-[var(--primary)] hover:underline" href="mailto:Damoladauda10@gmail.com">Damoladauda10@gmail.com</a> or use the form below.</p>
            <div className="mt-6 flex justify-center">
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4 max-w-md w-full px-4">
                <input type="hidden" name="access_key" value="79d9a523-e7c0-43a3-b0c1-7d5394c642eb" />
                <input className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl" type="text" name="name" placeholder="Your name" required />
                <input className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl" type="email" name="email" placeholder="Your email" required />
                <textarea className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl" name="message" placeholder="Message" rows="5" required></textarea>
                <button className="bg-[var(--primary)] text-white p-3 rounded-xl hover:bg-[#15385a]" type="submit">Send Message</button>
              </form>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Or connect on <a href="https://linkedin.com/in/adedamola-dauda" className="text-[var(--primary)] hover:underline">LinkedIn</a>.</p>
          </section>
        </main>
        <footer className="mt-20 py-8 text-center text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Adedamola Dauda — Full-Stack & DevOps Engineer</footer>
      </div>
    </div>
  );
}

