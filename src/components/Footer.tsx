import React from 'react'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/research', label: 'Research' },
    { href: '/teaching', label: 'Teaching' },
    { href: '/blog', label: 'Blog' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    {
      href: 'https://linkedin.com/in/devpra',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/devpra1999',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'mailto:dev.sriv99@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-blue-800 dark:bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Dev Prakash Srivastava
            </h3>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Economics researcher specializing in macroeconomics and financial econometrics. PhD applicant passionate about quantitative analysis and 
              policy research.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-blue-100 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100 text-sm">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>dev.sriv99@gmail.com</span>
              </div>
              <div className="flex items-center text-blue-100 text-sm">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+39-379-211-4123</span>
              </div>
              <div className="flex items-center text-blue-100 text-sm">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>Milan, Italy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-blue-700">
          <div className="text-center text-blue-100 text-sm">
            © {currentYear} Dev Prakash Srivastava. Built with React, Vite, and TailwindCSS. 
            <span className="opacity-75"> Static site deployed on Vercel/Netlify.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer