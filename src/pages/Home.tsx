import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Dev Prakash Srivastava
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Economics & Finance Research
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Aspiring PhD Candidate | M.Sc. Economics & Social Sciences, Bocconi University
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-12">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            IIT Kanpur Graduate
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
            Bocconi University
          </span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
            Research Experience
          </span>
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
            GRE: 337/340
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Academic Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Currently pursuing advanced research in Economics and Finance with a focus on 
            macroeconomics, financial econometrics, and computational methods. 
            My academic journey spans from engineering at IIT Kanpur to specialized 
            economics research at Bocconi University.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Building expertise in term structure models, demographic economics, and 
            sentiment analysis for financial markets.
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Research Focus
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My research interests lie at the intersection of macroeconomics and finance, 
            with particular emphasis on term structure modeling, demographic impacts on 
            fiscal sustainability, and the application of machine learning in financial markets.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Exploring cutting-edge methods in econometrics and computational finance 
            under the guidance of leading researchers.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home