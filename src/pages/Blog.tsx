import React from 'react'
import { Calendar, Clock, Tag } from 'lucide-react'

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Insights on Economics, Finance, and Research
        </p>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
          Blog Coming Soon
        </h2>
        <p className="text-blue-800 dark:text-blue-200 mb-6">
          I'm working on creating thoughtful content about economics research, 
          academic insights, and the intersection of finance and technology. 
          Stay tuned for upcoming posts!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full">
            Research Insights
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full">
            Academic Life
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full">
            Economic Theory
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-full">
            Data Science
          </span>
        </div>
      </div>

      {/* Planned Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Planned Content Topics
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Understanding Term Structure Models in Modern Finance
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Demographic Transitions and Economic Policy
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Machine Learning Applications in Financial Markets
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                My Journey from Engineering to Economics
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Research Highlights
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                Term Premia Estimation
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                Insights from building interactive models for Euro Area bond markets
              </p>
              <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Research completed May 2024</span>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                Sentiment Analysis in Finance
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                Using NLP techniques for earnings call analysis and return prediction
              </p>
              <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Ongoing research</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Blog Post Structure */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Tag className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Preview: Future Post Structure
          </h3>
        </div>
        
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h4 className="text-gray-900 dark:text-white mb-2">
            "The Role of Demographics in Shaping Economic Policy"
          </h4>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>March 2025 (Planned)</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>8 min read</span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <em>Sample excerpt:</em> As societies around the world experience significant demographic 
            shifts—aging populations, declining birth rates, and changing migration patterns—the 
            implications for economic policy become increasingly complex. In my recent research 
            on demographic-augmented models, I've explored how these population dynamics 
            influence fiscal sustainability and long-term economic growth...
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>What you'll learn:</strong>
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• How demographic changes impact macroeconomic variables</li>
              <li>• Policy implications of population aging</li>
              <li>• Quantitative methods for demographic-economic modeling</li>
              <li>• Case studies from Euro Area economies</li>
            </ul>
          </div>
        </article>
      </div>

      {/* Newsletter Signup Placeholder */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
        <p className="mb-6">
          Get notified when new blog posts are published. I'll share insights from 
          my research and thoughts on current developments in economics and finance.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled
          />
          <button 
            className="px-6 py-2 bg-white/20 text-white rounded-r-lg hover:bg-white/30 transition-colors cursor-not-allowed"
            disabled
          >
            Subscribe
          </button>
        </div>
        <p className="text-sm text-white/80 mt-2">
          <em>Newsletter functionality coming soon</em>
        </p>
      </div>
    </div>
  )
}

export default Blog