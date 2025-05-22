import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  companyName: string;
  description: string;
  navItems: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  description,
  navItems,
  contactInfo,
  socialLinks,
  copyrightText,
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{companyName}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a 
                  href={socialLinks.facebook}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
          
          {/* Navigation Links */}
          {navItems.map((navItem, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6">{navItem.title}</h3>
              <ul className="space-y-4">
                {navItem.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {copyrightText}
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;