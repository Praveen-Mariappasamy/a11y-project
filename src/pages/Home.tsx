import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Ear, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Experience Digital Accessibility Challenges
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Walk in the shoes of people with disabilities and understand why accessibility matters in digital design.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-12">
      <Link 
          to="/hearing-game"
          className="card hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="bg-teal-100 text-teal-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Ear className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">Hearing Impairment Challenge</h2>
            <p className="text-gray-600 mb-6 flex-grow">
              Try to understand video content without audio or captions, and discover why proper captioning matters.
            </p>
            <div className="flex items-center text-teal-600 font-medium">
              Try the game
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </Link>

        <Link 
          to="/vision-game"
          className="card hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col h-full">
            <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">Vision Impairment Challenge</h2>
            <p className="text-gray-600 mb-6 flex-grow">
              Experience the frustration of encountering images without alt text and understand why descriptive alternatives are essential.
            </p>
            <div className="flex items-center text-indigo-600 font-medium">
              Try the game
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </Link>

      </motion.div>

      <motion.div variants={itemVariants} className="card p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-2xl font-semibold mb-3">Why This Matters</h2>
        <p className="mb-4">
          Around 15% of the world's population lives with some form of disability. By making digital experiences accessible, we ensure that everyone can participate in our increasingly digital world.
        </p>
        <Link 
          to="/about"
          className="inline-flex items-center bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;