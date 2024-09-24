import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Hero: React.FC = () => {
  return (
    <Parallax bgImage="https://images.pexels.com/photos/27630279/pexels-photo-27630279/free-photo-of-a-woman-sitting-in-a-round-window-in-a-small-house.jpeg" strength={500}>
      <div className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to MyHomestay</h1>
          <p className="text-xl">Find your perfect home away from home</p>
        </motion.div>
      </div>
    </Parallax>
  );
};

export default Hero;