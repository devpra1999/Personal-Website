import React from 'react'
import { FileText, Code, Globe } from 'lucide-react'

const Research: React.FC = () => {
  const currentProjects = [
    {
      title: 'Demographics and Fiscal Sustainability',
      supervisor: 'Prof. Carlo Favero',
      period: 'Feb 2025 – Present',
      status: 'Current',
      description: 'Constructing harmonized cross-country panel data (1950–present) for five Euro Area economies, covering demographic, macroeconomic, and fiscal indicators. Estimating demographic-augmented models of growth, real interest rates, and fiscal balances with simulations of debt dynamics under future demographic scenarios.',
      hasCode: true,
      hasPaper: true,
      hasArticle:false,
      hasWebsite: true,
      websiteLink: "https://devpra.shinyapps.io/Debt_Dynamics_Simulations/",
      paperLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5388917",
      codeLink: "https://github.com/devpra1999/Demographic-Trends-and-Government-Debt-Dynamics"
    },
    {
      title: 'Sentiment Embeddings for Return Prediction',
      supervisor: 'Prof. Carlo Favero',
      period: 'Nov 2024 – June 2025',
      status: 'Ongoing',
      description: 'Developing pipeline processing earnings call transcripts through sentiment-fine-tuned BERT model to generate firm-level sentiment embeddings. Augmenting with contextual information from regulatory filings using retrieval-augmented generation (RAG) techniques and exploring predictive power for asset returns.',
      hasCode: true,
      hasPaper: false,
      hasArticle:false,
      hasWebsite: false,
      codeLink: "https://github.com/devpra1999/Demographic-Trends-and-Government-Debt-Dynamics"
    }
  ]

  const completedProjects = [
    {
      title: 'Estimating Term Premia for the Euro Area and US',
      supervisor: 'Prof. Carlo Favero',
      period: 'June 2023 – May 2024',
      status: 'Completed',
      description: 'Constructed panel database combining macroeconomic variables, survey expectations, and central bank guidance for five EU countries and the US. Estimated 10-year term premia using survey-based methods and affine term structure models. Built Shiny web platform for personalized term premia estimates.',
      hasCode: true,
      hasPaper: false,
      hasArticle:false,
      hasWebsite: true,
      websiteLink: "https://devpra.shinyapps.io/Term_Premia/",
      codeLink: "https://github.com/devpra1999/Demographic-Trends-and-Government-Debt-Dynamics"
    },
    {
      title: 'Fragmentation Risk in the Eurozone Sovereign Bond Market',
      supervisor: 'Prof. Carlo Favero',
      period: 'Jan 2024 – May 2024',
      status: 'Completed',
      description: 'Developed interactive RShiny dashboard to monitor real-time sovereign bond market fragmentation across Euro Area countries. Ingested market data via Python using Refinitiv APIs and processed macro-fundamentals in R to compute fundamental-implied yields and identify deviations in market pricing.',
      hasCode: true,
      hasPaper: false,
      hasArticle: true,
      hasWebsite: true,
      websiteLink: "http://devpra.shinyapps.io/IEP-Yields-vs-Bounds",
      articleLink: "https://iep.unibocconi.eu/publications/ecb-and-tpi-how-measure-fragmentation-risk-eurozone-sovereign-bond-market",
      codeLink: "https://github.com/devpra1999/Demographic-Trends-and-Government-Debt-Dynamics"
    }
  ]

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex-1">
          {project.title}
        </h3>
        <span className={`status-badge ml-4 ${
          project.status === 'Current' ? 'status-current' : 
          project.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'
        }`}>
          {project.status}
        </span>
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <span className="font-medium">{project.supervisor}</span> • {project.period}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex gap-3">
        {project.hasPaper && project.paperLink && (
          <a
            href={project.paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm inline-flex items-center"
          >
            <FileText className="h-4 w-4 mr-2" />
            Paper
          </a>
        )}
        {project.hasArticle && project.articleLink && (
          <a
            href={project.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm inline-flex items-center"
          >
            <FileText className="h-4 w-4 mr-2" />
            Article
          </a>
        )}
        {project.hasCode && project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm inline-flex items-center"
          >
            <Code className="h-4 w-4 mr-2" />
            Code
          </a>
        )}
        {project.hasWebsite && project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm inline-flex items-center"
          >
            🌐 Website
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Research</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Current research projects spanning demographic economics, financial 
            econometrics, and quantitative finance
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Research Overview */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Research Focus & Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Core Research Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Demographic Economics</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fiscal sustainability and population dynamics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Financial Econometrics</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Term structure modeling and risk premia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Portfolio Optimization</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Random matrix theory and hierarchical clustering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Machine Learning in Finance</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">NLP applications and sentiment analysis</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Skills
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Panel Data Construction</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cross-country harmonization and validation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Econometric Modeling</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ATSM, VAR analysis, and simulation methods</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Interactive Platforms</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">RShiny dashboards and web applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Real-time Analytics</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">API integration and live data processing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research