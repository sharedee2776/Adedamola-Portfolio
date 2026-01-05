import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
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
      desc: "Automated CI/CD pipeline implementing blue-green deployment strategy for zero-downtime releases. Features automated testing, deployment slots, traffic routing, and rollback capabilities using Azure DevOps and App Services.",
      github: "https://github.com/sharedee2776/azure-blue-green-cicd",
      demo: "https://dev.azure.com/sharedee2776/BlueGreenDemo",
      tags: ["Azure DevOps", "CI/CD", "Blue-Green Deployment", "Azure App Service"]
    },
    {
      title: "Cloud Resume Challenge - Azure",
      desc: "Full-stack serverless web application showcasing cloud architecture skills. Features include a responsive frontend, Azure Functions backend, CosmosDB database, and CI/CD pipeline with GitHub Actions.",
      github: "https://github.com/sharedee2776/azure-resume-challenge",
      demo: "https://www.adedamolajohn.com",
      tags: ["Azure", "Serverless", "CI/CD", "CosmosDB", "JavaScript"]
    },
    {
      title: "Cloud Infrastructure Automation",
      desc: "Infrastructure as Code solution using Terraform and Azure. Automated deployment of multi-tier architecture with networking, security, and monitoring components. Includes reusable modules and CI/CD integration.",
      github: "https://github.com/sharedee2776/terraform-azure-infrastructure",
      demo: "",
      tags: ["Terraform", "Azure", "IaC", "DevOps", "Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Projects projects={projects} />
      </main>
    </div>
  );
}

export default App;