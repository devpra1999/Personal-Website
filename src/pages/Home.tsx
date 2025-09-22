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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
              <img 
                src="/profile-photo.jpg" 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
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
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am an Economics Researcher at Bocconi University, specializing in macroeconomics and econometrics. My research leverages advanced quantitative modeling—including modern Natural Language Processing (NLP) and Large Language Models (LLMs)—to analyze economic trends and financial markets.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My research interests span monetary policy, fiscal sustainability,
              and financial econometrics. My current research looks at how demographic transitions 
              influence long-term economic trends and fiscal stability. 
              I also have applied experience in quantitative finance, building portfolio optimization systems using Random Matrix Theory.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As I prepare to apply for PhD programs in Economics, I'm also exploring adjacent 
              fields such as economic history and behavioral macroeconomics.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          {/* Stats Section
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home