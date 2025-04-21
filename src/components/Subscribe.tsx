import React from 'react';

const platforms = [
  {
    name: 'Spotify',
    icon: '🎧',
    color: 'bg-[#1DB954]',
    url: '#'
  },
  {
    name: 'Apple Podcasts',
    icon: '🍎',
    color: 'bg-[#872EC4]',
    url: '#'
  },
  {
    name: 'YouTube',
    icon: '📺',
    color: 'bg-[#FF0000]',
    url: '#'
  }
];

const Subscribe = () => {
  return (
    <section id="subscribe" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">Listen & Subscribe</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Never miss an episode. Subscribe to your favorite platform and join our growing community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center text-xl mb-3`}>
                {platform.icon}
              </div>
              <span className="font-medium text-secondary-600 group-hover:text-brand-green transition-colors">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;