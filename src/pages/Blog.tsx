import React from 'react'
import { ExternalLink } from 'lucide-react'

interface BlogPost {
  id: string
  category: string
  categoryColor: string
  date: string
  title: string
  description: string
  tags: string[]
  substackUrl: string
}

const Blog: React.FC = () => {
  // Sample blog posts data - you can replace these with your actual Substack articles
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      category: 'Research Note',
      categoryColor: 'bg-blue-500',
      date: 'Dec 15, 2024',
      title: 'Understanding Demographic Transitions and Fiscal Policy',
      description: 'Exploring how aging populations affect government debt dynamics and the challenges facing European economies in maintaining fiscal sustainability...',
      tags: ['Fiscal Policy', 'Demographics'],
      substackUrl: 'https://yoursubstack.substack.com/p/demographic-transitions'
    },
    {
      id: '2',
      category: 'Methodology',
      categoryColor: 'bg-gray-500',
      date: 'Nov 28, 2024',
      title: 'Random Matrix Theory in Portfolio Optimization',
      description: 'A practical guide to implementing Marchenko-Pastur denoising techniques for improving covariance matrix estimation in high-dimensional portfolio problems...',
      tags: ['Finance', 'Methods'],
      substackUrl: 'https://yoursubstack.substack.com/p/random-matrix-theory'
    },
    {
      id: '3',
      category: 'Industry Insight',
      categoryColor: 'bg-green-500',
      date: 'Nov 10, 2024',
      title: 'Central Bank Digital Currencies and Monetary Policy',
      description: 'Analyzing the potential implications of CBDCs for traditional monetary transmission mechanisms and financial stability considerations...',
      tags: ['Monetary Policy', 'Fintech'],
      substackUrl: 'https://yoursubstack.substack.com/p/cbdc-monetary-policy'
    },
    {
      id: '4',
      category: 'Tutorial',
      categoryColor: 'bg-purple-500',
      date: 'Oct 22, 2024',
      title: 'Building Interactive Economic Dashboards with RShiny',
      description: 'Step-by-step guide to creating real-time economic monitoring tools using RShiny, with examples from sovereign bond market analysis...',
      tags: ['R', 'Visualization'],
      substackUrl: 'https://yoursubstack.substack.com/p/rshiny-dashboards'
    },
    {
      id: '5',
      category: 'Opinion',
      categoryColor: 'bg-red-500',
      date: 'Sep 30, 2024',
      title: 'The Future of Economic Research: AI and Natural Language Processing',
      description: 'Reflecting on how machine learning techniques are transforming empirical economics and the opportunities for sentiment analysis in financial markets...',
      tags: ['AI/ML', 'Research'],
      substackUrl: 'https://yoursubstack.substack.com/p/ai-economics-research'
    },
    {
      id: '6',
      category: 'Research Note',
      categoryColor: 'bg-blue-500',
      date: 'Sep 15, 2024',
      title: 'Term Structure Modeling: From Theory to Practice',
      description: 'Bridging the gap between affine term structure models and practical implementation, with insights from Euro Area and US government bond markets...',
      tags: ['Term Structure', 'Bonds'],
      substackUrl: 'https://yoursubstack.substack.com/p/term-structure-modeling'
    }
  ]

  const handlePostClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Research notes, insights, and thoughts on economics, finance, and methodology
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => handlePostClick(post.substackUrl)}
            >
              {/* Category Badge and Date */}
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium ${post.categoryColor}`}>
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* Tags and Read More */}
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Read more
                  <ExternalLink className="h-3 w-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Substack Subscribe Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Follow on Substack</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to my Substack for the latest research insights, economic analysis, 
            and methodology discussions delivered directly to your inbox.
          </p>
          <a
            href="https://yoursubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Visit My Substack
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog