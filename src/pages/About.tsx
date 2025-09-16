import React from 'react'

const About: React.FC = () => {
  const programmingLanguages = ['R', 'Python', 'MATLAB', 'SQL', 'C']
  const specializedTools = ['LaTeX', 'RShiny', 'BERT/NLP', 'Refinitiv APIs']
  
  const awards = [
    {
      title: 'IGIER-BIDSA VSI Fellow',
      subtitle: 'Visiting Students Initiative 2023-24',
      description: 'Prestigious research fellowship at Bocconi University'
    },
    {
      title: 'Graduate Merit Award',
      subtitle: 'Bocconi University',
      description: 'Awarded for exceptional academic performance'
    },
    {
      title: 'KVPY Fellowship Award',
      subtitle: 'Dept. of Science & Technology, Govt. of India',
      description: 'Rank 83 among 100,000 students across India'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicated economics researcher with a passion for understanding complex 
            macroeconomic phenomena through rigorous quantitative analysis
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Academic Background */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Academic Background
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  M.Sc. Economics and Social Sciences
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  Bocconi University, Italy
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Sept 2022 – Dec 2024 | GPA: 108/110
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Courses in macroeconometrics, monetary policy, economic history and statistical methods
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  M.S. Economics
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-1">
                  IIT Kanpur, India
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  July 2021 – June 2022 | GPA: 9.64/10
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Advanced coursework in econometrics, macroeconomic theory, and 
                  quantitative methods with distinction.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  B.Tech. Chemical Engineering
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                  IIT Kanpur, India
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  July 2017 – June 2022 | GPA: 8.3/10
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Strong foundation in mathematics, statistics, and computational methods.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Technical Skills
            </h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <span key={lang} className="skill-badge">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Specialized Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {specializedTools.map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Research Interests
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Macroeconomic-Financial Linkages</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Economic History</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Financial Econometrics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Term Structure Modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Portfolio Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards & Fellowships */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Awards & Fellowships
          </h2>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {award.title}
                </h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-1">
                  {award.subtitle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About