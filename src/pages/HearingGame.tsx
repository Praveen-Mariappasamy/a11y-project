import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hearingGames } from '../data/gameData';
import GameContainer from '../components/GameContainer';

const HearingGame: React.FC = () => {
  const currentGame = hearingGames;
  
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Hearing Accessibility Challenge</h1>
        <p className="text-xl text-gray-600 mt-2">
          Experience how hearing impaired users engage with video content
        </p>
      </motion.div>
      {currentGame.map((game, index) => {
       return (
        <GameContainer game={game}>
          {index === 0 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{game.title}</h2>
              <p className="text-gray-600 mb-6">{game.description}</p>
            </>
          )}
        </GameContainer>
      );
      })}
    </div>
  );
};

export default HearingGame;