import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Ear, Code, Users, MessageSquare, Blocks } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
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

  const accessibilityPrinciples = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Perceivable",
      description: "Information and user interface components must be presentable to users in ways they can perceive."
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: "Operable",
      description: "User interface components and navigation must be operable by anyone using any input method."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Understandable",
      description: "Information and the operation of the user interface must be understandable to all users."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Robust",
      description: "Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About This Project
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding accessibility challenges through interactive experiences.
        </p>
      </motion.div>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <div className="card p-6">
          <p className="text-gray-700 mb-4">
            This interactive experience was created to help developers, designers, and content creators
            understand the importance of digital accessibility. By simulating the challenges faced by
            users with disabilities, we hope to inspire more inclusive digital practices.
          </p>
          <p className="text-gray-700">
            The games in this application demonstrate just two types of accessibility challenges, but
            the digital world presents many more obstacles for users with various disabilities. Our goal
            is to raise awareness and promote empathy through firsthand experience.
          </p>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {accessibilityPrinciples.map((principle, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Resources</h2>
        <div className="card p-6">
          <ul className="space-y-4">
            <li>
              <a 
                href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Web Content Accessibility Guidelines (WCAG)
              </a>
              <p className="text-gray-700 mt-1">
                The international standard for web accessibility.
              </p>
            </li>
            <li>
              <a 
                href="https://www.a11yproject.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                The A11Y Project
              </a>
              <p className="text-gray-700 mt-1">
                A community-driven resource for learning web accessibility.
              </p>
            </li>
            <li>
              <a 
                href="https://www.deque.com/axe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                axe by Deque
              </a>
              <p className="text-gray-700 mt-1">
                Tools for automated accessibility testing.
              </p>
            </li>
            <li>
              <a 
                href="https://wave.webaim.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                WAVE Web Accessibility Evaluation Tool
              </a>
              <p className="text-gray-700 mt-1">
                Free tool to evaluate web content for accessibility issues.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;