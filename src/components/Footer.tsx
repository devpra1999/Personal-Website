import React from 'react'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'mailto:dev.sriv99@gmail.com',
      icon: Mail,
      label: 'Email',
      display: 'dev.sriv99@gmail.com'
    },
    {
      href: 'https://linkedin.com/in/devpra',
      icon: Linkedin,
      label: 'LinkedIn',
      display: 'linkedin.com/in/devpra'
    },
    {
      href: 'https://github.com/devpra1999',
      icon: Github,
      label: 'GitHub',
      display: 'github.com/devpra1999'
    }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Dev Prakash Srivastava
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Aspiring PhD candidate in Economics and Finance with research experience 
              in macroeconomics, financial econometrics, and computational methods. 
              Currently seeking opportunities for doctoral studies.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                +39-379-211-4123
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Milan, Italy
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <IconComponent className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.display}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} Dev Prakash Srivastava. Built with React, TypeScript, and TailwindCSS.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="/cv.pdf" 
                download="Dev_Prakash_Srivastava_CV.pdf"
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Download CV
              </a>
              <a 
                href="/contact" 
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="/research" 
                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Research
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer