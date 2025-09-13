import React from 'react'

const Teaching: React.FC = () => {
  const skills = [
    'DSGE Modeling',
    'VAR Analysis', 
    'Debt Sustainability',
    'Fiscal Multipliers',
    'MATLAB/R',
    'EViews'
  ]

  const responsibilities = [
    {
      title: 'Tutorial Sessions',
      description: 'Leading weekly tutorial sessions to reinforce lecture materials and work through complex problem sets'
    },
    {
      title: 'Office Hours',
      description: 'Providing individual student support and clarifying advanced econometric techniques'
    },
    {
      title: 'Assignment Grading',
      description: 'Evaluating problem sets and providing detailed feedback on student work'
    },
    {
      title: 'Exam Preparation',
      description: 'Organizing review sessions and helping students prepare for comprehensive examinations'
    }
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Teaching</h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Teaching assistant experience at Bocconi University
          </p>
        </div>

        {/* Main Teaching Experience */}
        <div className="card mb-12">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Teaching Assistant
            </h2>
            <span className="status-badge status-current">
              Current & Future
            </span>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Fiscal Macroeconomics
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
              Bocconi University
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Instructors:</strong> Prof. Francesco Giavazzi & Prof. Carlo A. Favero
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Terms:</strong> Spring 2025, Spring 2026
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <strong>Level:</strong> Undergraduate Course
            </div>
            
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Course Overview
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Undergraduate-level course covering the intersection of fiscal policy and macroeconomic dynamics. 
              Topics include fiscal sustainability, debt dynamics, fiscal multipliers, and the interaction between monetary 
              and fiscal policy in different economic regimes.
            </p>
          </div>
          
          {/* Teaching Responsibilities 
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
              Teaching Responsibilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((resp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                    {resp.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {resp.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Skills & Tools Covered */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Tools Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Philosophy & Future Interests
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Teaching Philosophy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My teaching approach emphasizes bridging theoretical rigor with practical applications. 
              I focus on helping students develop both technical skills and economic intuition, 
              encouraging critical thinking about policy implications and real-world relevance.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Problem-based learning with real economic data
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Connecting theory to current policy debates
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Individualized support and mentoring
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Future Teaching Interests
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am particularly interested in developing courses that integrate modern computational 
              methods with traditional economic theory, preparing students for data-driven research 
              in contemporary economics.
            </p>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Applied Macroeconometrics
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Time series methods and policy evaluation
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">
                  Computational Finance
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Programming for financial modeling
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">
                  Demographic Economics
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Population dynamics and economic policy
                </p>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  )
}

export default Teaching