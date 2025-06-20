import { motion } from 'framer-motion';
import { ExternalLink, Download, Image } from 'lucide-react';

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

// Placeholder poster data
const posters = [
  {
    id: 1,
    title: "Music Festival 2024",
    description: "Vibrant poster design for an annual music festival featuring bold typography and dynamic graphics.",
    category: "Event Poster",
    tools: ["Photoshop", "Illustrator", "Typography"],
    dimensions: "24x36 inches",
    imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Coffee Shop Promotion",
    description: "Minimalist poster design for a local coffee shop's new seasonal menu launch.",
    category: "Marketing Poster",
    tools: ["Illustrator", "InDesign", "Brand Design"],
    dimensions: "18x24 inches",
    imageUrl: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Tech Conference 2024",
    description: "Modern and professional poster design for a technology conference with futuristic elements.",
    category: "Corporate Poster",
    tools: ["Photoshop", "After Effects", "3D Design"],
    dimensions: "27x40 inches",
    imageUrl: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Art Exhibition Opening",
    description: "Elegant poster design for a contemporary art exhibition featuring abstract visual elements.",
    category: "Cultural Poster",
    tools: ["Illustrator", "Photoshop", "Color Theory"],
    dimensions: "20x30 inches",
    imageUrl: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Fitness Challenge Campaign",
    description: "Energetic poster design for a 30-day fitness challenge with motivational messaging.",
    category: "Health & Fitness",
    tools: ["Photoshop", "Typography", "Photo Manipulation"],
    dimensions: "16x20 inches",
    imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Environmental Awareness",
    description: "Impactful poster design promoting environmental conservation with nature-inspired graphics.",
    category: "Social Cause",
    tools: ["Illustrator", "Photoshop", "Sustainable Design"],
    dimensions: "22x28 inches",
    imageUrl: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    downloadUrl: "#"
  }
];

const categories = ["All", "Event Poster", "Marketing Poster", "Corporate Poster", "Cultural Poster", "Health & Fitness", "Social Cause"];

export default function PostersPage() {
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
          <Image size={32} className="text-gray-700" />
          <h1 className="heading-2">Poster Designs</h1>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A collection of creative poster designs for various events, campaigns, and promotional materials 
          that combine visual impact with effective communication.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200/50 text-gray-700 hover:bg-gray-300/50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {posters.map((poster) => (
          <motion.div 
            key={poster.id}
            variants={itemVariants}
            className="glass-card group overflow-hidden"
          >
            <div className="h-64 overflow-hidden rounded-lg mb-4 relative">
              <img 
                src={poster.imageUrl} 
                alt={poster.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="mb-2 flex items-center justify-between">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200/50 text-gray-700">
                {poster.category}
              </span>
              <span className="text-xs text-gray-600">{poster.dimensions}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{poster.title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{poster.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {poster.tools.map((tool) => (
                <span 
                  key={tool} 
                  className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100/50 text-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2">
                <ExternalLink size={14} />
                <span>View Full</span>
              </button>
              <a 
                href={poster.downloadUrl}
                className="btn btn-outline flex items-center gap-2 text-sm px-3 py-2"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        variants={itemVariants}
        className="glass-card"
      >
        <h2 className="heading-3 mb-6">Design Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Visual Hierarchy</h3>
            <p className="text-gray-700 text-sm mb-4">
              Creating clear visual hierarchy through typography, color, and layout to guide the viewer's attention 
              and communicate the message effectively.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Brand Integration</h3>
            <p className="text-gray-700 text-sm mb-4">
              Seamlessly incorporating brand elements while maintaining creative freedom to produce 
              memorable and impactful poster designs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Target Audience</h3>
            <p className="text-gray-700 text-sm mb-4">
              Understanding the target audience and tailoring the design approach to resonate with 
              their preferences and communication style.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Print Optimization</h3>
            <p className="text-gray-700 text-sm mb-4">
              Ensuring all designs are optimized for print production with proper resolution, 
              color profiles, and bleed settings for professional results.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}