import { personalInfo } from '../../data/personal';
import { SocialLink } from '../common/SocialLink';

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t-4 border-blue-700">
    <div className="container mx-auto px-6 text-center">
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 font-mono flex items-center justify-center">
        {personalInfo.name}
      </div>
      <p className="text-gray-400 mb-6 font-mono uppercase tracking-wider">
        {personalInfo.tagline}
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        <SocialLink platform="linkedin" href={personalInfo.linkedin} iconSize="w-6 h-6" />
        <SocialLink platform="github" href={personalInfo.github} iconSize="w-6 h-6" />
      </div>

      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-500 font-mono text-sm">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </div>
  </footer>
);
