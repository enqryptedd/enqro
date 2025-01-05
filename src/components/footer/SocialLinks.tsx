import React from 'react';
import { Github, Twitter, MessageCircle, Youtube } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/enqro', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/enqro', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://discord.gg/enqro', label: 'Discord' },
  { icon: Youtube, href: 'https://youtube.com/@enqro', label: 'YouTube' }
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}