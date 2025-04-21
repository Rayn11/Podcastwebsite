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
      date: "January 21, 2023",
      duration: "45 mins",
      description: "Varun co-founded 'The Glitch' and helped it become India’s largest new-age, ‘digital-first’ creative agency.",
      youtubeId: "CCpFfNk4BhU"
    },
    {
      id: 2,
      title: "There's no shortcut to success",
      date: "April 17, 2024",
      duration: "5 mins",
      description: " I talk about how success can not be achieved with shortcuts. How important hard work is and how important excellence is. It's all a choice afterall.",
      youtubeId: "kHZ0qj2O_UU"
    },
    {
      id: 3,
      title: "Live Life Better One Day At A Time with Monyputhy Ly (Johnny)",
      date: "May 1, 2023",
      duration: "46 mins",
      description: "Johnny is a top Educational Podcaster from Cambodia. Growing up, nothing stressed Monyputhy other than trying to live up to the name imprinted to him, 'Puthy', which means knowledge.",
      youtubeId: "sSOyUV3vJws"
    },
    {
      id: 4,
      title: "Habits, Experiences, Learning & Productivity with Scott Young",
      date: "April 19, 2023",
      duration: "45 mins",
      description: "Scott H Young, a Wall Street Journal bestselling author, podcast host, computer programmer and an avid reader.",
      youtubeId: "5q6-tItFJd0"
    },
    {
      
      id: 5,
      title: "Winning Your Inner Battles with Darius Foroux",
      date: "January 1, 2023",
      duration: "43 mins",
      description:"Darius Foroux, the author of 7 books and the creator of 6 online courses. He writes about productivity, business, and wealth building.",
      youtubeId: "TeuBXL8oh3w"
    },
    {
      id: 6,
      title: "Focussing on today only",
      date: "April 10, 2024",
      duration: "5 mins",
      description: "I talk about my learning from the book 'Do it today' and some tips on how you can make stuff happen rather than stuff happening to you without your control.",
      youtubeId: "EOvPh_SFQ8s"
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
