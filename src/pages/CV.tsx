import React from 'react'
import { Download, Eye } from 'lucide-react'

const CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">CV</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete academic and professional background
          </p>
        </div>

        {/* CV Document Access */}
        <div className="card mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Curriculum Vitae
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Download or view my complete CV in PDF format
              </p>
            </div>
            <div className="flex space-x-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </a>
              <a
                href="/cv.pdf"
                download="Dev_Prakash_Srivastava_CV.pdf"
                className="btn-primary"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        </div>

        {/* Education & Experience Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="card">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  MSc in Economic and Social Sciences (ESS)
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Bocconi University, Milan
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <strong>Period:</strong> 2024-2026 (Expected)
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Focus:</strong> Advanced Macroeconomics, Financial Economics
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  BTech in Mathematics and Computing
                </h4>
                <p className="text-green-600 dark:text-green-400 font-medium mb-1">
                  IIT Kanpur, India
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <strong>Period:</strong> 2020-2024
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>CPI:</strong> 9.1/10
                </div>
              </div>
            </div>
          </div>

          {/* Key Experience */}
          <div className="card">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Teaching Assistant
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                  Fiscal Macroeconomics
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <strong>Institution:</strong> Bocconi University
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Terms:</strong> Spring 2025, Spring 2026
                </div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Research Assistant
                </h4>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-1">
                  Demographics and Fiscal Sustainability
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <strong>Supervisor:</strong> Prof. Carlo Favero
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Period:</strong> 2024-Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Competencies */}
        <div className="card">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Skills & Technical Competencies
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Programming & Statistical Software
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'MATLAB', 'Stata', 'EViews', 'Julia'].map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Economic Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Econometrics', 'Time Series Analysis', 'Panel Data', 'VAR Models', 'DSGE'].map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Additional Tools
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['LaTeX', 'Git', 'Academic Writing', 'Data Visualization'].map(skill => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-gray-500 dark:text-gray-400">Fluent</span>
                </div>
                <div className="flex justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Hindi</span>
                  <span className="text-gray-500 dark:text-gray-400">Native</span>
                </div>
                <div className="flex justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Italian</span>
                  <span className="text-gray-500 dark:text-gray-400">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV