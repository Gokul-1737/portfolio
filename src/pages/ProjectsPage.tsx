import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      duration: 0.5 
    } 
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Placeholder project data - replace with your projects
const projects = [
  {
    id: 1,
    title: "Subscription Maintenance",
    description: "The web should maintains the subscription of your, It has shoes the all subscription as you applied, that has inactive state or expired state.  ",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    demoUrl: "https://sub-kepper.vercel.app/",
    githubUrl: "https://github.com/Gokul-1737/sub-kepper.git",
    imageUrl: "https://images.pexels.com/photos/6956302/pexels-photo-6956302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Material UI", "Redux", "Progressive Web App"],
    demoUrl: "https://task-app.example.com",
    githubUrl: "https://github.com/yourusername/task-management",
    imageUrl: "https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media platforms that integrates with various APIs to provide insights and metrics visualization.",
    technologies: ["Vue.js", "D3.js", "Node.js", "Express", "PostgreSQL"],
    demoUrl: "https://social-dashboard.example.com",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    imageUrl: "https://images.pexels.com/photos/4122277/pexels-photo-4122277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A responsive weather application with location detection, 7-day forecasts, and detailed weather information.",
    technologies: ["React", "OpenWeather API", "Geolocation API", "Tailwind CSS"],
    demoUrl: "https://weather-app.example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Placeholder known applications/tools data
const applications = [
  { category: "Databases", tools: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"] },
  { category: "Cloud Services", tools: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify"] },
  { category: "Development Tools", tools: ["Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { category: "Design Tools", tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"] }
];

export default function ProjectsPage() {
  return (
    <motion.div 
      className="section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="mb-8 text-center"
        variants={itemVariants}
      >
        <h1 className="heading-2 mb-4">Projects & Known Applications</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Here are some of the key projects I've worked on, showcasing my skills and experience
          across different technologies and domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="glass-card group overflow-hidden"
          >
            <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100/50 text-primary-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        variants={itemVariants}
        className="glass-card"
      >
        <h2 className="heading-3 mb-6">Known Applications & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((appCategory) => (
            <div key={appCategory.category}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{appCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {appCategory.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-100/50 text-secondary-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
