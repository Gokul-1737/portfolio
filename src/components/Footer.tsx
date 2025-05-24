import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-700 text-sm">&copy; {currentYear} Your Name. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}