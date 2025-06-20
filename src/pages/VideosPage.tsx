import { motion } from 'framer-motion';
import { Play, Download, Video, Clock } from 'lucide-react';

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

// Placeholder video data
const videos = [
  {
    id: 1,
    title: "Brand Introduction Video",
    description: "Animated brand introduction video showcasing company values and services with modern motion graphics.",
    category: "Brand Video",
    duration: "2:30",
    tools: ["After Effects", "Premiere Pro", "Motion Graphics"],
    format: "1920x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    description: "Dynamic product showcase video with 3D animations and sleek transitions for a tech product launch.",
    category: "Product Video",
    duration: "1:45",
    tools: ["Cinema 4D", "After Effects", "3D Animation"],
    format: "1920x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Social Media Ad Campaign",
    description: "Series of short-form videos optimized for social media platforms with engaging animations and call-to-actions.",
    category: "Social Media",
    duration: "0:30",
    tools: ["After Effects", "Premiere Pro", "Social Media Optimization"],
    format: "1080x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "Event Highlight Reel",
    description: "Energetic highlight reel from a corporate event featuring dynamic cuts, music synchronization, and branding.",
    category: "Event Video",
    duration: "3:15",
    tools: ["Premiere Pro", "DaVinci Resolve", "Color Grading"],
    format: "1920x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "Explainer Animation",
    description: "Educational explainer video with custom illustrations and smooth animations explaining complex concepts simply.",
    category: "Educational",
    duration: "4:20",
    tools: ["After Effects", "Illustrator", "Character Animation"],
    format: "1920x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  },
  {
    id: 6,
    title: "Music Video Graphics",
    description: "Creative visual effects and motion graphics for an independent music video with artistic flair.",
    category: "Music Video",
    duration: "3:45",
    tools: ["After Effects", "Premiere Pro", "Visual Effects"],
    format: "1920x1080 MP4",
    thumbnailUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#"
  }
];

const categories = ["All", "Brand Video", "Product Video", "Social Media", "Event Video", "Educational", "Music Video"];

export default function VideosPage() {
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
          <Video size={32} className="text-gray-700" />
          <h1 className="heading-2">Video Projects</h1>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A showcase of video content including motion graphics, promotional videos, and animated content 
          designed to engage audiences and communicate messages effectively.
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
        {videos.map((video) => (
          <motion.div 
            key={video.id}
            variants={itemVariants}
            className="glass-card group overflow-hidden"
          >
            <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={24} className="text-gray-800 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Clock size={12} />
                {video.duration}
              </div>
            </div>
            
            <div className="mb-2 flex items-center justify-between">
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200/50 text-gray-700">
                {video.category}
              </span>
              <span className="text-xs text-gray-600">{video.format}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{video.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {video.tools.map((tool) => (
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
                <Play size={14} />
                <span>Watch</span>
              </button>
              <a 
                href={video.videoUrl}
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
        <h2 className="heading-3 mb-6">Video Production Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold text-gray-700">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Concept</h3>
            <p className="text-sm text-gray-700">
              Developing creative concepts and storyboards based on project requirements and target audience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold text-gray-700">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Production</h3>
            <p className="text-sm text-gray-700">
              Creating animations, motion graphics, and visual effects using industry-standard software.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold text-gray-700">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Post-Production</h3>
            <p className="text-sm text-gray-700">
              Editing, color grading, sound design, and final compositing to deliver polished content.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold text-gray-700">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
            <p className="text-sm text-gray-700">
              Optimizing and delivering final videos in multiple formats for various platforms and uses.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}