import React, { useState } from 'react';
import { Calendar, Clock, Youtube, AlignJustify as Spotify } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  youtubeId: string;
}

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group">
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${episode.youtubeId}`}
          title={episode.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-gray-500 flex items-center">
            <Calendar size={14} className="mr-1" /> {episode.date}
          </span>
          <span className="text-xs font-semibold text-gray-500 flex items-center">
            <Clock size={14} className="mr-1" /> {episode.duration}
          </span>
        </div>
        <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-brand-green transition-colors">
          {episode.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {episode.description}
        </p>
      </div>
    </div>
  );
};

const Episodes = () => {
  const episodes: Episode[] = [
    {
      id: 1,
      title: "Everything out of Syllabus with Varun Duggirala",
      date: "January 03, 2023",
      duration: "45 mins",
      description: "Varun co-founded 'The Glitch' and helped it become India’s largest new-age, ‘digital-first’ creative agency.",
      youtubeId: "CCpFfNk4BhU"
    },
    {
      id: 2,
      title: "The Art of Deep Work in a Distracted World",
      date: "May 8, 2025",
      duration: "55 min",
      description: "Discover practical strategies for achieving focused work and maximizing productivity in today's constantly connected environment.",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Authentic Leadership: Leading with Purpose",
      date: "May 1, 2025",
      duration: "62 min",
      description: "Explore the principles of authentic leadership and learn how to inspire teams while staying true to your values.",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "The Power of Mindful Decision Making",
      date: "April 24, 2025",
      duration: "45 min",
      description: "Learn how to make better decisions by incorporating mindfulness practices into your decision-making process.",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Building Strong Professional Relationships",
      date: "April 17, 2025",
      duration: "58 min",
      description: "Discover the key principles of networking and building lasting professional relationships in today's digital age.",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Mastering Work-Life Integration",
      date: "April 10, 2025",
      duration: "51 min",
      description: "Learn strategies for creating a harmonious balance between your professional and personal life in the modern workplace.",
      youtubeId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="episodes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">Top Episodes</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our most impactful conversations on personal growth and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://www.youtube.com/@WhateverMatters"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition duration-300"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Watch on YouTube
          </a>
          <a
            href="https://open.spotify.com/show/WhateverMatters"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1ed760] transition duration-300"
          >
            <Spotify className="w-5 h-5 mr-2" />
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
