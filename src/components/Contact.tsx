import React from 'react';
import { Mail, Instagram, Twitter, Facebook, Linkedin, Briefcase } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">Connect With Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Join our community and stay updated with the latest episodes and insights.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-600 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-brand-green transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-600 mb-4">Newsletter</h3>
              <a
                href="https://chalkmeout.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-medium hover:text-primary-700 flex items-center"
              >
                <Mail size={20} className="mr-2" />
                Subscribe to our newsletter
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-600 mb-4">Explore More</h3>
              <div className="space-y-4">
                <a
                  href="https://www.chalkmeout.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green font-medium hover:text-primary-700 block"
                >
                  Visit www.chalkmeout.com →
                </a>
                <p className="text-gray-600">
                  Discover more content, resources, and insights on our website.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-secondary-600 mb-4 flex items-center">
                <Briefcase className="mr-2 text-brand-green" />
                Sponsor the Podcast
              </h3>
              <p className="text-gray-600 mb-4">
                Reach our engaged global audience and align your brand with meaningful conversations about personal growth and success.
              </p>
              <a
                href="https://www.passionfroot.me/chalkmeout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Partner with us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;