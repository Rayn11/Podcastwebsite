import React from 'react';
import { MapPin, Users, Smartphone } from 'lucide-react';

interface Location {
  country: string;
  percentage: number;
  icon: string;
}

interface GenderStat {
  type: string;
  percentage: number;
}

interface AgeStat {
  range: string;
  percentage: number;
}

interface PlatformStat {
  name: string;
  percentage: number;
}

const locations: Location[] = [
  {
    country: "India",
    percentage: 45,
    icon: "🇮🇳"
  },
  {
    country: "Germany",
    percentage: 25,
    icon: "🇩🇪"
  },
  {
    country: "United States",
    percentage: 20,
    icon: "🇺🇸"
  },
  {
    country: "Turkey",
    percentage: 5,
    icon: "🇹🇷"
  },
  {
    country: "Thailand",
    percentage: 5,
    icon: "🇹🇭"
  }
];

const genderStats: GenderStat[] = [
  { type: "Male", percentage: 46.7 },
  { type: "Female", percentage: 41.1 },
  { type: "Not specified", percentage: 11.5 },
  { type: "Non-binary", percentage: 0.7 }
];

const ageStats: AgeStat[] = [
  { range: "18-22", percentage: 3.3 },
  { range: "23-27", percentage: 44.9 },
  { range: "28-34", percentage: 30.7 },
  { range: "35-44", percentage: 13.4 },
  { range: "45-59", percentage: 2.4 },
  { range: "60+", percentage: 2.6 },
  { range: "Unknown", percentage: 2.7 }
];

const platformStats: PlatformStat[] = [
  { name: "Spotify", percentage: 65 },
  { name: "Web Browser", percentage: 15 },
  { name: "Spotify for Creators", percentage: 5 },
  { name: "Podbean", percentage: 5 },
  { name: "Apple Podcasts", percentage: 5 },
  { name: "Other", percentage: 5 }
];

const StatBar = ({ percentage }: { percentage: number }) => (
  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
    <div 
      className="h-full bg-primary-500 rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Audience</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Understanding our diverse and engaged listener base
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gender Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="mr-2 text-primary-600" />
              Gender Distribution
            </h3>
            <div className="space-y-4">
              {genderStats.map((stat) => (
                <div key={stat.type} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{stat.type}</span>
                  <div className="flex items-center">
                    <StatBar percentage={stat.percentage} />
                    <span className="ml-3 text-sm text-gray-500">{stat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Age Distribution</h3>
            <div className="space-y-4">
              {ageStats.map((stat) => (
                <div key={stat.range} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{stat.range}</span>
                  <div className="flex items-center">
                    <StatBar percentage={stat.percentage} />
                    <span className="ml-3 text-sm text-gray-500">{stat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="mr-2 text-primary-600" />
              Geographic Distribution
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.country} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{location.icon}</span>
                    <span className="font-medium text-gray-900">{location.country}</span>
                  </div>
                  <div className="flex items-center">
                    <StatBar percentage={location.percentage} />
                    <span className="ml-3 text-sm text-gray-500">{location.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Smartphone className="mr-2 text-primary-600" />
              Listening Platforms
            </h3>
            <div className="space-y-4">
              {platformStats.map((stat) => (
                <div key={stat.name} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{stat.name}</span>
                  <div className="flex items-center">
                    <StatBar percentage={stat.percentage} />
                    <span className="ml-3 text-sm text-gray-500">{stat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;