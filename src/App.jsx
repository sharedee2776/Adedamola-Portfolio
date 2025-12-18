import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
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
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-xl z-50"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <header className="max-w-5xl mx-auto p-6 md:p-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">Adedamola Dauda</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Backend & DevOps Engineer</p>
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
                Motivated Backend & DevOps Engineer with hands-on experience in containerization, CI/CD automation, cloud deployment (AWS, Azure), and observability. I build scalable backend systems, deploy them reliably with zero-downtime strategies, and instrument services for real-time insights.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-200">
                <li><strong>Languages:</strong> Python</li>
                <li><strong>DevOps:</strong> Docker, GitHub Actions</li>
                <li><strong>Cloud:</strong> AWS EC2, Azure App Service</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana, Loki</li>
              </ul>
            </div>
            <div className="md:w-48 mt-6 md:mt-0 md:ml-8 text-center">
              <img src="/preview.png" alt="Adedamola Dauda" className="w-36 h-36 rounded-full object-cover mx-auto" />
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Poland · Open to junior DevOps roles</p>
            </div>
          </section>

          <section id="projects" className="mt-10">
            <h3 className="text-xl font-semibold text-[var(--primary)]">Selected Projects</h3>
            <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white dark:bg-gray-800 border rounded-lg p-5 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap items-center">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs mr-2 mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-[var(--primary)] hover:underline">View on GitHub</a>
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm bg-[var(--accent)] text-white px-3 py-1 rounded">Live demo</a>}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[var(--primary)]">Skills</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-200">
              <div>
                <h5 className="font-semibold">Backend</h5>
                <ul className="mt-2">
                  <li>Python / FastAPI</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">DevOps</h5>
                <ul className="mt-2">
                  <li>Docker, Docker Compose</li>
                  <li>GitHub Actions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Observability</h5>
                <ul className="mt-2">
                  <li>Prometheus, Grafana</li>
                  <li>Loki, Promtail</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 text-center">
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

        <footer className="mt-20 py-8 text-center text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Adedamola Dauda — DevOps & Backend Engineer</footer>
      </div>
    </div>
  )
}