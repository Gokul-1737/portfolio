import { motion } from 'framer-motion';
import { ExternalLink, Figma, Eye } from 'lucide-react';

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

// Placeholder Figma projects data
const figmaProjects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "Complete mobile app design for an e-commerce platform with user-friendly interface, product catalog, and checkout flow.",
    category: "Mobile App Design",
    tools: ["Figma", "Prototyping", "User Research", "Wireframing"],
    figmaUrl: "https://figma.com/file/example1",
    previewUrl: "https://figma.com/proto/example1",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "SaaS Dashboard Design",
    description: "Modern dashboard interface for a SaaS platform with data visualization, user management, and analytics features.",
    category: "Web App Design",
    tools: ["Figma", "Design System", "Data Visualization", "Responsive Design"],
    figmaUrl: "https://figma.com/file/example2",
    previewUrl: "https://figma.com/proto/example2",
    imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: "Complete UI/UX design for a food delivery application with restaurant browsing, ordering system, and delivery tracking.",
    category: "Mobile App Design",
    tools: ["Figma", "User Journey", "Prototyping", "Icon Design"],
    figmaUrl: "https://figma.com/file/example3",
    previewUrl: "https://figma.com/proto/example3",
    imageUrl: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Banking App Interface",
    description: "Secure and intuitive banking application design with account management, transactions, and financial planning tools.",
    category: "Mobile App Design",
    tools: ["Figma", "Security Design", "Accessibility", "User Testing"],
    figmaUrl: "https://figma.com/file/example4",
    previewUrl: "https://figma.com/proto/example4",
    imageUrl: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Portfolio Website Design",
    description: "Creative portfolio website design for a photographer with gallery showcase, client testimonials, and booking system.",
    category: "Website Design",
    tools: ["Figma", "Creative Design", "Portfolio Layout", "Image Optimization"],
    figmaUrl: "https://figma.com/file/example5",
    previewUrl: "https://figma.com/proto/example5",
    imageUrl: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform design with course management, student progress tracking, and interactive learning modules.",
    category: "Web App Design",
    tools: ["Figma", "Educational UX", "Progress Tracking", "Interactive Design"],
    figmaUrl: "https://figma.com/file/example6",
    previewUrl: "https://figma.com/proto/example6",
    imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const designProcess = [
  { step: "Research", description: "User research, competitor analysis, and requirement gathering" },
  { step: "Wireframing", description: "Low-fidelity wireframes and information architecture" },
  { step: "Design", description: "High-fidelity mockups with visual design and branding" },
  { step: "Prototyping", description: "Interactive prototypes for user testing and validation" },
  { step: "Testing", description: "User testing, feedback collection, and design iteration" }
];

export default function FigmaPage() {
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
        <div className="flex items-center justify-center gap-3 mb-4">
          <Figma size={32} className="text-gray-700" />
          <h1 className="heading-2">Figma UI/UX Projects</h1>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Explore my UI/UX design projects created in Figma, showcasing user-centered design 
          principles, modern interfaces, and seamless user experiences across various platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {figmaProjects.map((project) => (
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
            
            <div className="mb-2">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200/50 text-gray-700">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span 
                  key={tool} 
                  className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100/50 text-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <a 
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2"
              >
                <Figma size={14} />
                <span>Figma File</span>
              </a>
              <a 
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2 text-sm px-3 py-2"
              >
                <Eye size={14} />
                <span>Preview</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        variants={itemVariants}
        className="glass-card"
      >
        <h2 className="heading-3 mb-6">Design Process</h2>
        <p className="text-gray-700 mb-6">
          My UI/UX design process follows a user-centered approach, ensuring that every design decision 
          is backed by research and validated through testing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {designProcess.map((process, index) => (
            <div key={process.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-gray-700">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{process.step}</h3>
              <p className="text-sm text-gray-700">{process.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}