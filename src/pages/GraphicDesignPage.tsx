import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Palette, Image, Video } from 'lucide-react';

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

const categories = [
  {
    title: "Posters",
    description: "Creative poster designs for events, marketing campaigns, and brand promotions",
    icon: <Image size={32} />,
    path: "/graphic-design/posters",
    count: "15+ Projects"
  },
  {
    title: "Videos",
    description: "Motion graphics, promotional videos, and animated content for digital platforms",
    icon: <Video size={32} />,
    path: "/graphic-design/videos",
    count: "10+ Projects"
  }
];

export default function GraphicDesignPage() {
  const location = useLocation();
  const isMainPage = location.pathname === '/graphic-design';

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
          <Palette size={32} className="text-gray-700" />
          <h1 className="heading-2">Graphic Design</h1>
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Explore my graphic design portfolio featuring creative posters, promotional materials, 
          and video content that combines visual storytelling with brand communication.
        </p>
      </motion.div>

      {isMainPage && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
            >
              <NavLink 
                to={category.path}
                className="glass-card group block h-full transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-gray-700 mb-4 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-200/50 text-gray-700">
                    {category.count}
                  </span>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div 
        variants={itemVariants}
        className="glass-card"
      >
        <h2 className="heading-3 mb-6">Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-4">
              <Palette size={24} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Creative Vision</h3>
            <p className="text-sm text-gray-700">
              Every design tells a story and communicates a message through thoughtful visual elements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-4">
              <Image size={24} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Brand Consistency</h3>
            <p className="text-sm text-gray-700">
              Maintaining brand identity while creating visually appealing and memorable designs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gray-200/50 flex items-center justify-center mx-auto mb-4">
              <Video size={24} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Motion & Impact</h3>
            <p className="text-sm text-gray-700">
              Creating dynamic content that captures attention and engages audiences effectively.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}