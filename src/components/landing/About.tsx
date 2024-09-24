import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            MyHomestay is your gateway to unique and comfortable accommodations around the world. 
            We connect travelers with local hosts to provide authentic experiences and unforgettable stays.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;