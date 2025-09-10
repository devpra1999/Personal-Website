import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dev Prakash Srivastava
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Economics & Finance Research
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Aspiring PhD Candidate | M.Sc. Economics & Social Sciences, Bocconi University
          </p>
        </header>
        
        <main className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Academic Portfolio Website
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is my academic portfolio showcasing my research experience, 
              educational background, and professional accomplishments in Economics and Finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                IIT Kanpur Graduate
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                Bocconi University
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">
                Research Experience
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full">
                GRE: 337/340
              </span>
            </div>
          </div>
          
          <div className="text-gray-600 dark:text-gray-400">
            <p>Portfolio website in development...</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App