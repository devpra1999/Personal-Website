import React from 'react'

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Academic Biography & Background
        </p>
      </div>
      
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Educational Background
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                M.Sc. Economics and Social Sciences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Bocconi University, Italy | Sept 2022 – Dec 2024
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>GPA: 108/110</strong> - Specialized in advanced macroeconomics, 
                financial econometrics, and computational methods. Conducted extensive 
                research under Prof. Carlo Favero on term structure modeling and 
                demographic economics.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                M.S. Economics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Indian Institute of Technology, Kanpur | July 2021 – June 2022
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>GPA: 9.64/10</strong> - Foundation in economic theory, 
                econometrics, and quantitative methods. Built strong analytical 
                and mathematical foundations for advanced economic research.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.Tech. Chemical Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Indian Institute of Technology, Kanpur | July 2017 – June 2022
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>GPA: 8.3/10</strong> - Strong foundation in mathematics, 
                statistics, and analytical problem-solving. Developed computational 
                skills and quantitative reasoning that complement economic research.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Research Interests & Goals
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My research interests lie at the intersection of macroeconomics and finance, 
            with a particular focus on understanding how demographic changes influence 
            economic dynamics and financial markets. I am passionate about applying 
            cutting-edge econometric techniques and machine learning methods to address 
            fundamental questions in economic policy and financial stability.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Currently seeking opportunities for PhD studies where I can contribute to 
            advancing our understanding of macroeconomic-financial linkages, particularly 
            in areas related to term structure modeling, demographic transitions, and 
            the application of natural language processing in financial market analysis.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            My ultimate goal is to pursue a career in academic research and policy, 
            contributing meaningful insights to help address the complex economic 
            challenges facing societies today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About