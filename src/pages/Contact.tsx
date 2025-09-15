import React from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    // Static form - no backend functionality
    console.log('Contact form data:', data)
    //alert('Thank you for your message! This is a static form for demonstration purposes.')
    reset()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Contact</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss research opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Get in Touch
            </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I'm always interested in discussing research opportunities or academic collaborations. Feel free to reach out through any of the channels below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Mail className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                <a 
                  href="mailto:dev.sriv99@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  dev.sriv99@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Phone className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                <span className="text-gray-600 dark:text-gray-400">+39-379-211-4123</span>
              </div>
            </div>

            <div className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <MapPin className="h-6 w-6 text-purple-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                <span className="text-gray-600 dark:text-gray-400">Milan, Italy</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect on Social Platforms
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/devpra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/devpra1999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Send a Message
            </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            <em>Note: This is a static form for demonstration purposes only.</em>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Research collaboration, etc."
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              I typically respond within 24-48 hours. For urgent matters, 
              please feel free to contact me directly via phone or email.
            </p>
          </div>
        </div>
      </div>

        {/* Research Areas of Interest 
        <div className="card mt-8">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Areas of Interest for Collaboration
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Macroeconomic-Financial Linkages',
            'Term Structure Modeling',
            'Demographic Economics',
            'Financial Econometrics',
            'Machine Learning in Finance',
            'Computational Methods'
          ].map((area, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{area}</span>
            </div>
          ))}
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default Contact