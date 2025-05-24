import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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

export default function ResumePage() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = '/path-to-your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Your-Name-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <h1 className="heading-2 mb-4">Resume</h1>
        <p className="text-secondary-700 max-w-3xl mx-auto">
          Download my complete resume to learn more about my experience, skills, and qualifications.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-full aspect-[1/1.414] bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Replace with an actual preview of your resume */}
            <img 
              src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg" 
              alt="Resume Preview" 
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={handleDownload}
            className="btn btn-primary flex items-center gap-2 text-lg px-6 py-3"
          >
            <Download size={20} />
            Download Resume (PDF)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}