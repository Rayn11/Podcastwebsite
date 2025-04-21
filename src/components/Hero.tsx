import React from 'react';
import { Play, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary-950">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-block mb-6 animate-pulse">
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-white text-sm font-medium">NEW EPISODE WEEKLY</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="block">Whatever</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              Matters
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white/80">
            A raw and unfiltered podcast on self-improvement, career growth, productivity, and building meaningful relationships.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://open.spotify.com/show/3Wbw6mllbAJhZT8SeAcdc2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-primary-500 text-white font-medium transition duration-300 ease-out hover:bg-primary-600"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-white via-transparent to-transparent"></span>
              <Play size={18} className="mr-2" />
              <span>Latest Episode</span>
            </a>
            
            <a 
              href="https://chalkmeout.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-500/30 rounded-full text-primary-400 font-medium hover:bg-primary-500/10 transition duration-300"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#episodes" className="text-primary-400 opacity-70 hover:opacity-100 transition-opacity">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;