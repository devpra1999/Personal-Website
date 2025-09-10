import React from 'react'
import { Calendar, ExternalLink, Users, TrendingUp } from 'lucide-react'

const Research: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Research & Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Academic research in Economics and Finance
        </p>
      </div>

      <div className="space-y-8">
        {/* Current Research */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Current Research
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Demographics and Fiscal Sustainability
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Users className="h-4 w-4 mr-1" />
                <span>Prof. Carlo Favero</span>
                <Calendar className="h-4 w-4 ml-4 mr-1" />
                <span>Feb 2025 – Present</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Constructing a harmonized cross-country panel (1950–present) for five Euro Area economies, 
                covering demographic, macroeconomic, and fiscal indicators. Estimating demographic-augmented 
                models of growth, real interest rates, and fiscal balances.
              </p>
              <div className="text-sm">
                <strong className="text-gray-900 dark:text-white">Key Methods:</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-1">
                  <li>Panel data construction and harmonization</li>
                  <li>Demographic-augmented macroeconomic modeling</li>
                  <li>Debt dynamics simulation under future demographic scenarios</li>
                  <li>Counterfactual fertility pattern analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Sentiment Embeddings for Return Prediction
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Users className="h-4 w-4 mr-1" />
                <span>Prof. Carlo Favero</span>
                <Calendar className="h-4 w-4 ml-4 mr-1" />
                <span>Nov 2024 – June 2025</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developing a pipeline processing earnings call transcripts through sentiment-fine-tuned 
                BERT model trained on financial-domain text. Augmenting embeddings with contextual 
                information using retrieval-augmented generation (RAG) techniques.
              </p>
              <div className="text-sm">
                <strong className="text-gray-900 dark:text-white">Key Methods:</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-1">
                  <li>Sentiment-fine-tuned BERT model development</li>
                  <li>Time series sentiment embedding generation</li>
                  <li>RAG techniques for contextual augmentation</li>
                  <li>Cross-sectional and time-series return prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Research */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Completed Research
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Estimating Term Premia for the Euro Area and US
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Users className="h-4 w-4 mr-1" />
                <span>Prof. Carlo Favero</span>
                <Calendar className="h-4 w-4 ml-4 mr-1" />
                <span>June 2023 – May 2024</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Constructed a comprehensive panel database combining macroeconomic variables, 
                survey expectations, and central bank guidance for five EU countries and the US. 
                Estimated 10-year term premia using multiple methodologies and built an interactive 
                web platform for dissemination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <strong className="text-gray-900 dark:text-white">Methodologies:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <li>Survey-based term premia estimation</li>
                    <li>Five-factor affine term structure model (ATSM)</li>
                    <li>Yield-drift-augmented ATSM</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Deliverables:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <li>Shiny web platform for interactive exploration</li>
                    <li>Custom macro-expectations input functionality</li>
                    <li>Personalized term premia estimates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fragmentation Risk in Eurozone Sovereign Bond Market
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                <Users className="h-4 w-4 mr-1" />
                <span>Prof. Carlo Favero</span>
                <Calendar className="h-4 w-4 ml-4 mr-1" />
                <span>Jan 2024 – May 2024</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed an interactive RShiny dashboard to monitor real-time sovereign bond 
                market fragmentation across Euro Area countries. Integrated market data via 
                Refinitiv APIs with automated visual tracking capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <strong className="text-gray-900 dark:text-white">Technical Implementation:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <li>Python data ingestion via Refinitiv APIs</li>
                    <li>R-based macro-fundamentals processing</li>
                    <li>Interactive RShiny dashboard development</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Analytics:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <li>Fundamental-implied yield computation</li>
                    <li>Market pricing deviation identification</li>
                    <li>Risk premia and spread volatility tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Research Interests & Future Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Core Areas
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Macroeconomic-Financial Linkages</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Term Structure Modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Demographic Economics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Financial Econometrics</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Methodological Focus
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Machine Learning in Finance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Time Series Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Computational Methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research