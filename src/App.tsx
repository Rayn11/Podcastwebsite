import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Episodes from './components/Episodes';
import Guests from './components/Guests';
import About from './components/About';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Episodes />
      <Guests />
      <About />
      <Subscribe />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;