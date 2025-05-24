import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, BookOpen } from 'lucide-react';

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

// Placeholder data - replace with your information
const internships = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Frontend Developer Intern",
    duration: "May 2022 - Aug 2022",
    keyLearnings: [
      "Collaborated with a team of 5 developers to create responsive web applications",
      "Implemented new features using React and TypeScript",
      "Participated in code reviews and agile development processes"
    ]
  },
  {
    id: 2,
    company: "Digital Solutions LLC",
    role: "Full Stack Developer Intern",
    duration: "Jan 2021 - Apr 2021",
    keyLearnings: [
      "Developed RESTful APIs using Node.js and Express",
      "Created database schemas and queries for MongoDB",
      "Implemented authentication and authorization systems"
    ]
  }
];

const projectCertifications = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "October 2023",
    skills: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "CloudFormation"]
  },
  {
    id: 2,
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "July 2023",
    skills: ["Agile Methodologies", "Scrum Framework", "Sprint Planning", "Team Facilitation"]
  },
  {
    id: 3,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "March 2023",
    skills: ["Database Design", "CRUD Operations", "Aggregation Framework", "Performance Optimization"]
  }
];

const expoWorkshops = [
  {
    id: 1,
    title: "Web Accessibility Workshop",
    role: "Presenter",
    event: "FrontEnd Dev Conference 2023",
    description: "Led a workshop on implementing WCAG 2.1 standards in web applications"
  },
  {
    id: 2,
    title: "React Native Mobile App Showcase",
    role: "Participant",
    event: "App Developers Expo 2022",
    description: "Presented a cross-platform mobile application built with React Native"
  }
];

export default function CertificationsPage() {
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
        <h1 className="heading-2 mb-4">Certifications & Achievements</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A collection of professional certifications, internships, and workshop participation
          that demonstrate my expertise and continuous learning journey.
        </p>
      </motion.div>
      
      {/* Internships */}
      <motion.div 
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase size={24} className="text-primary-600" />
          <h2 className="heading-3">Internships</h2>
        </div>
        
        <div className="space-y-6">
          {internships.map((internship) => (
            <div key={internship.id} className="border-l-4 border-primary-500 pl-4 py-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{internship.company}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {internship.duration}
                </div>
              </div>
              <p className="text-primary-600 font-medium mb-2">{internship.role}</p>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Learnings:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {internship.keyLearnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Project Certifications */}
      <motion.div 
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <Award size={24} className="text-primary-600" />
          <h2 className="heading-3">Project Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCertifications.map((cert) => (
            <div key={cert.id} className="bg-white/50 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
              <div className="flex items-center justify-between mb-3">
                <p className="text-primary-600">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100/50 text-primary-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Expo/Workshops */}
      <motion.div 
        className="glass-card mb-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={24} className="text-primary-600" />
          <h2 className="heading-3">Expo & Workshops</h2>
        </div>
        
        <div className="space-y-6">
          {expoWorkshops.map((expo) => (
            <div key={expo.id} className="border-l-4 border-secondary-500 pl-4 py-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{expo.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <p className="text-secondary-600 font-medium">{expo.role} at {expo.event}</p>
              </div>
              <p className="text-gray-700">{expo.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Backend Experience */}
      <motion.div 
        className="glass-card"
        variants={itemVariants}
      >
        <h2 className="heading-3 mb-4">Backend Experience</h2>
        <p className="text-gray-700 mb-4">
          Experienced in developing robust backend systems with a focus on scalability, security, and performance.
          Proficient in designing RESTful APIs, implementing authentication/authorization systems, and working with 
          various databases to create efficient data models and queries.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", 
            "Authentication", "Docker", "Microservices", "AWS", "Firebase"].map((tool) => (
            <span 
              key={tool} 
              className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-100/50 text-secondary-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}