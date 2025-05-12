import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { visionGames } from '../data/gameData';
import GameContainer from '../components/GameContainer';

const VisionGame: React.FC = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const currentGame = visionGames[currentGameIndex];

  let visuallyHiddenClass = "visually-hidden";

  // This component simulates the experience of encountering an image without alt text
  // The image is visually present, but its content is not accessible via screen readers
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vision Accessibility Challenge</h1>
        <p className="text-xl text-gray-600 mt-2">
          Experience how visually impaired users navigate the web
        </p>
      </motion.div>

      <GameContainer game={currentGame}>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{currentGame.title}</h2>
        <p className="text-gray-600 mb-6">{currentGame.description}</p>
      </GameContainer>
    </div>
  );
};

export default VisionGame;