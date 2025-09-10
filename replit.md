# Dev Prakash Srivastava - Academic Portfolio

## Overview

This is a personal academic portfolio website for Dev Prakash Srivastava, an aspiring PhD candidate in Economics and Finance. The website showcases his educational background, research experience, teaching activities, and academic achievements. Built as a modern single-page application, it serves as a comprehensive digital CV and research portfolio for academic and professional networking.

The portfolio highlights his journey from IIT Kanpur to Bocconi University, his research work under Prof. Carlo Favero on demographics and fiscal sustainability, and his teaching assistant experience. The site is designed to present academic content in a clean, professional manner suitable for academic audiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: React Router DOM for client-side navigation between portfolio sections
- **Styling**: Tailwind CSS utility-first framework for responsive design and consistent styling
- **Build Tool**: Vite for fast development and optimized production builds
- **Animation**: Framer Motion for smooth page transitions and interactive elements

### UI/UX Design Patterns
- **Theme System**: Custom dark/light/system theme provider with persistent storage
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities
- **Component Architecture**: Modular React components with proper separation of concerns
- **Layout System**: Consistent layout wrapper with navigation and footer components

### Content Management
- **Static Content**: All portfolio content is embedded directly in React components
- **Form Handling**: React Hook Form for contact form validation and management
- **Icon System**: Lucide React for consistent iconography throughout the application
- **Typography**: Inter font family loaded via Google Fonts for professional appearance

### Development Workflow
- **TypeScript Configuration**: Strict type checking with modern ES2020 features
- **Code Organization**: Feature-based file structure with clear separation between pages and components
- **Development Server**: Configured for host 0.0.0.0 on port 5000 for Replit compatibility

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18.2.0 and React DOM for UI framework
- **React Router DOM**: Version 6.8.1 for single-page application routing
- **React Hook Form**: Version 7.43.5 for form validation and state management

### UI and Animation
- **Framer Motion**: Version 10.12.4 for animations and page transitions
- **Lucide React**: Version 0.263.1 for consistent icon library
- **Tailwind CSS**: Version 3.3.0 for utility-first styling

### Development Tools
- **Vite**: Version 4.3.0 as build tool and development server
- **TypeScript**: Version 5.0.2 for static type checking
- **PostCSS**: Version 8.4.23 for CSS processing
- **Autoprefixer**: Version 10.4.14 for CSS vendor prefixing

### External Services
- **Google Fonts**: Inter font family loaded via CDN
- **Contact Form**: Currently static implementation (no backend integration)
- **CV Download**: Placeholder for PDF download functionality

Note: The application is currently frontend-only with no backend services, database connections, or external API integrations. All content is statically embedded in the React components.