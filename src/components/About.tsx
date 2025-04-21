import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7383469/pexels-photo-7383469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Podcast Host"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary-400 to-brand-green rounded-full mix-blend-multiply blur-2xl opacity-70"></div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-6">About The Podcast</h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Welcome to <span className="font-semibold text-secondary-600">Whatever Matters</span>, where we believe success isn't all about money—it's about embracing change, taking control, and knowing how to live, love, and #OwnYourLife.
              </p>
              
              <p>
                Each week, we bring you raw and unfiltered conversations about self-improvement, career growth, productivity, and building meaningful relationships. Our episodes blend personal stories, career lessons, and deep conversations with global thought leaders.
              </p>
              
              <p>
                Whether you're looking to advance your career, improve your relationships, or simply live a more fulfilling life, our discussions will provide you with actionable insights and fresh perspectives.
              </p>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-secondary-600 mb-4">Meet Your Host</h3>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Host" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-secondary-600">Narayanan (Rayn)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Entrepreneur, TEDx Speaker, and Writer, Rayn brings a unique blend of experience and insight to each episode, sharing personal stories and lessons learned from his journey in entrepreneurship and personal development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;