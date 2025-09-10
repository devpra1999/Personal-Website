import React from 'react'
import { Download, Award, GraduationCap, Briefcase } from 'lucide-react'

const CV: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Academic and Professional Experience
        </p>
        <a
          href="/cv.pdf"
          download="Dev_Prakash_Srivastava_CV.pdf"
          className="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
        >
          <Download className="h-5 w-5 mr-2" />
          Download Full CV (PDF)
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Key Achievements */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Key Achievements
              </h2>
            </div>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                <strong className="text-yellow-800 dark:text-yellow-200">GRE Score: 337/340</strong>
                <p className="text-gray-600 dark:text-gray-400">Verbal: 169/170, Quantitative: 168/170</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <strong className="text-blue-800 dark:text-blue-200">IGIER-BIDSA VSI Fellow</strong>
                <p className="text-gray-600 dark:text-gray-400">Visiting Students Initiative 2023-24</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                <strong className="text-green-800 dark:text-green-200">KVPY Fellowship</strong>
                <p className="text-gray-600 dark:text-gray-400">Rank 83 among 100,000 students</p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                <strong className="text-purple-800 dark:text-purple-200">Graduate Merit Award</strong>
                <p className="text-gray-600 dark:text-gray-400">Bocconi University</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="space-y-2">
              <div>
                <strong className="text-gray-700 dark:text-gray-300">Programming:</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm">R, Python, MATLAB, C, SQL</p>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">Tools:</strong>
                <p className="text-gray-600 dark:text-gray-400 text-sm">LaTeX, Git, Statistical Software</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main CV Content */}
        <div className="lg:col-span-2">
          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  M.Sc. Economics and Social Sciences
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Bocconi University, Italy</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Sept 2022 – Dec 2024 | GPA: 108/110</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  M.S. Economics
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium">IIT Kanpur, India</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">July 2021 – June 2022 | GPA: 9.64/10</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  B.Tech. Chemical Engineering
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">IIT Kanpur, India</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">July 2017 – June 2022 | GPA: 8.3/10</p>
              </div>
            </div>
          </div>

          {/* Research Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Research Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Demographics and Fiscal Sustainability
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                  Prof. Carlo Favero | Feb 2025 – Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Constructed harmonized cross-country panel for demographic and fiscal indicators. 
                  Estimated demographic-augmented models and simulated debt dynamics.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Estimating Term Premia for Euro Area and US
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                  Prof. Carlo Favero | June 2023 – May 2024
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Built panel database and estimated 10-year term premia using survey-based methods 
                  and affine term structure models. Developed Shiny web platform for findings dissemination.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Sentiment Embeddings for Return Prediction
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                  Prof. Carlo Favero | Nov 2024 – June 2025
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Developed sentiment-fine-tuned BERT model for earnings call transcripts. 
                  Explored predictive power of sentiment embeddings for asset returns.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Financial Modelling Intern
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium">Rationis, Milan</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">April – July 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Designed robust portfolio optimization pipelines using Random Matrix Theory, 
                regime-aware covariance modeling, and hierarchical clustering techniques. 
                Applied Nested Clustered Optimization for stable portfolio construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV