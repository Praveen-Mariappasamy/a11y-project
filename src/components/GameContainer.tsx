import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GameConfig } from '../types';

interface GameContainerProps {
  game: GameConfig;
  children: React.ReactNode;
}

const GameContainer: React.FC<GameContainerProps> = ({ game, children }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsCorrect(option === game.correctOption);
    setShowAnswer(true);
  };

  const handleTryAgain = () => {
    setShowAnswer(false);
    setGameCompleted(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="card mb-8"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="p-6 md:p-8">

        {children}

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
            <p className="text-indigo-700">{game.instructions}</p>
        </div>

        <div className="mb-8">
          {game.id === 'vision-game-1' ? (
            <div className="relative overflow-hidden rounded-lg w-full border" style={{ height: '435px' }}>
              {/* The image is visible but has no alt text for screen readers */}
              <img
                src={game.imageSrc}
                tabIndex={0}
                style={!showAnswer ? { filter: 'blur(100px)' } : {}}
                className={`object-cover rounded-lg`}
              />
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden">
              {/* Embed video without captions */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`${!showAnswer ? game.videoSrc2 : game.videoSrc1}`}
                  title="Video without captions"
                  className="w-full aspect-video rounded-lg border border-gray-200"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Answer Options */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            {game.options.map((option, index) => {
              const isSelected = selectedOption === option;
              const isAnswerCorrect = isCorrect === true && selectedOption === option;
              const isAnswerWrong =
                isCorrect === false && selectedOption === option;
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`border-2 p-4 rounded-lg transition duration-300 ${
                    isSelected
                      ? isAnswerCorrect
                        ? 'border-green-500 bg-green-100'
                        : 'border-red-500 bg-red-100'
                      : 'border-gray-300'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {selectedOption && (
            <div className="mt-4 text-center">
              {isCorrect ? (
                <p className="text-green-600 flex justify-center items-center">
                  <CheckCircle2 className="mr-2" /> Correct!
                </p>
              ) : (
                <p className="text-red-600 flex justify-center items-center">
                  <AlertTriangle className="mr-2" /> Incorrect. The correct answer is "{game.correctOption}".
                </p>
              )}
              <p className="text-gray-500 mt-2"><span className="alert">*</span>{game.explanation}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {!showAnswer ? '' : (
            <button
              onClick={handleTryAgain}
              className="btn btn-primary"
              aria-label="Try again"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameContainer;
