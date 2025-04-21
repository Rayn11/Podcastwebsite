import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

interface Guest {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  episode: string;
  episodeLink?: string;
  season: number;
}

const guests: Guest[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    company: "Stanford University",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "The Future of AI and Human Potential",
    episodeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    season: 1
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "CEO",
    company: "Global Ventures",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "Scaling Businesses with Purpose",
    season: 1
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Neuroscientist",
    company: "Brain Research Institute",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "Rewiring Your Brain for Success",
    season: 2
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Olympic Athlete",
    company: "Mental Performance Coach",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "Peak Performance Mindset",
    season: 2
  },
  {
    id: 5,
    name: "Lisa Chang",
    role: "Bestselling Author",
    company: "The Productivity Method",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "Mastering Time Management",
    season: 3
  },
  {
    id: 6,
    name: "David Kumar",
    role: "Tech Entrepreneur",
    company: "Future Labs",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    episode: "Innovation in the Digital Age",
    season: 4
  }
];

const Guests = () => {
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const seasons = [1, 2, 3, 4];

  const filteredGuests = selectedSeason 
    ? guests.filter(guest => guest.season === selectedSeason)
    : guests;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">
            World-Class Leaders from All Walks of Life
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Featuring conversations with innovators, thought leaders, and experts who are shaping the future.
          </p>

          {/* Season Filter */}
          <div className="relative inline-block text-left">
            <div className="group">
              <button
                type="button"
                className="inline-flex items-center justify-center w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-green"
                id="season-filter"
              >
                {selectedSeason ? `Season ${selectedSeason}` : 'All Seasons'}
                <ChevronDown className="w-5 h-5 ml-2" />
              </button>
              <div className="absolute right-0 left-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                <div className="py-1">
                  <button
                    onClick={() => setSelectedSeason(null)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All Seasons
                  </button>
                  {seasons.map((season) => (
                    <button
                      key={season}
                      onClick={() => setSelectedSeason(season)}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Season {season}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuests.map((guest) => (
            <div 
              key={guest.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  Season {guest.season}
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-600 mb-1">{guest.name}</h3>
                <p className="text-brand-green font-medium mb-2">{guest.role}</p>
                <p className="text-gray-600 text-sm mb-4">{guest.company}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <ExternalLink size={16} className="mr-2" />
                  {guest.episodeLink ? (
                    <a 
                      href={guest.episodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="line-clamp-1 hover:text-brand-green transition-colors"
                    >
                      {guest.episode}
                    </a>
                  ) : (
                    <span className="line-clamp-1">{guest.episode}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;