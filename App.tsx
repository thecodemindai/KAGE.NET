import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import CharacterRoster from './components/CharacterRoster';
import MechaShowcase from './components/MechaShowcase';
import AIStudio from './components/AIStudio';
import AboutSection from './components/AboutSection';
import ContactFooter from './components/ContactFooter';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-sans selection:bg-blue-500 dark:selection:bg-cyber-pink selection:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* Scroll Progress Bar - Fixed to Top of Screen */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-cyber-cyan z-[100] shadow-sm dark:shadow-[0_0_20px_#00f3ff]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Global Background Elements (Full Screen) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-90"></div>
      </div>

      {/* Main Container - 100% Width */}
      <div className="w-full bg-gray-50 dark:bg-[#030305] relative z-10 min-h-screen flex flex-col transition-colors duration-300">
        
        <Navbar />
        
        <main className="flex-1 w-full relative z-10">
          <Hero />
          
          {/* Sections manage their own content width */}
          <CharacterRoster />
          <MechaShowcase />
          <PortfolioGrid />
          <AIStudio />
          <AboutSection />
        </main>
        
        <ContactFooter />
      </div>
      
    </div>
  );
}

export default App;