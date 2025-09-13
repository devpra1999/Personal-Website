import React from 'react'
import { Eye, Download } from 'lucide-react'

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              DS
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Dev Prakash Srivastava
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Researcher in Economics and Finance, PhD Applicant
          </p>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Economics researcher specializing in macroeconomics, financial econometrics, and 
              demographic economics. Currently pursuing advanced research at Bocconi University, 
              with extensive experience in quantitative modeling, term structure analysis, and portfolio 
              optimization.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about understanding the intersection of demographics, fiscal sustainability, 
              and financial markets through rigorous empirical analysis and innovative computational 
              methods.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('research')} 
              className="btn-primary"
            >
              <Eye className="h-5 w-5 mr-2" />
              View Research
            </button>
            <a 
              href="/cv.pdf" 
              download="Dev_Prakash_Srivastava_CV.pdf"
              className="btn-secondary"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Research Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                108/110
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                MSc GPA (Bocconi)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                337/340
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                GRE Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home