import React from 'react'
import { Calendar, Users, BookOpen, Award } from 'lucide-react'

const Teaching: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Teaching Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Supporting advanced education in Economics and Finance
        </p>
      </div>

      {/* Main Teaching Experience */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center mb-6">
          <BookOpen className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Teaching Assistant Experience
          </h2>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Fiscal Macroeconomics
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Bocconi University, Department of Economics
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Users className="h-4 w-4 mr-1" />
                <span>Under Prof. Francesco Giavazzi</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Users className="h-4 w-4 mr-1" />
                <span>Under Prof. Carlo Favero</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Spring 2025 & Spring 2026 (Upcoming)</span>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Course Focus Areas
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Fiscal policy and macroeconomic dynamics</li>
                <li>• Government budget constraints and sustainability</li>
                <li>• Public debt and intergenerational equity</li>
                <li>• Fiscal-monetary policy interactions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Teaching Responsibilities & Contributions
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Academic Support</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Conduct weekly tutorial sessions and problem-solving workshops</li>
                  <li>• Provide one-on-one academic mentoring for students</li>
                  <li>• Grade assignments and provide detailed feedback</li>
                  <li>• Assist with course material preparation and presentation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Student Engagement</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Hold regular office hours for student consultations</li>
                  <li>• Facilitate group discussions on complex topics</li>
                  <li>• Support students with quantitative methods and modeling</li>
                  <li>• Guide students through empirical exercises and data analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Philosophy & Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Award className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Teaching Philosophy
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My teaching approach emphasizes the connection between theoretical concepts 
            and real-world applications. I believe in making complex macroeconomic 
            theories accessible by relating them to current economic developments and 
            policy challenges.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-600 dark:text-gray-400">
                Interactive learning through practical problem-solving
              </span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-600 dark:text-gray-400">
                Connecting theory to contemporary economic issues
              </span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-600 dark:text-gray-400">
                Encouraging critical thinking and analytical reasoning
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Skills Developed Through Teaching
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Communication & Pedagogy
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Developed expertise in explaining complex economic concepts to diverse 
                audiences, adapting teaching methods to different learning styles.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Mentorship & Leadership
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enhanced skills in academic mentoring, providing guidance on research 
                methods and career development in economics.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Course Development
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contributed to curriculum enhancement by developing supplementary materials 
                and innovative problem sets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Teaching Interests */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Future Teaching Interests
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          As I advance in my academic career, I am particularly interested in teaching 
          courses that bridge theoretical foundations with practical applications in 
          modern economics and finance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Advanced Macroeconomics
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dynamic models and policy analysis
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              Financial Econometrics
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Time series and empirical methods
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Computational Economics
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Programming and simulation methods
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaching