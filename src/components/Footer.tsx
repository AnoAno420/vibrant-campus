
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0A0A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-club-orange">VITKULT</h3>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering students through technology, innovation, and community building since 2020.
            </p>
            <p className="text-gray-500">© {currentYear} VITKULT. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#events" text="Events" />
              <FooterLink href="#team" text="Our Team" />
              <FooterLink href="#join" text="Join Us" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@vitkult.edu</li>
              <li>Location: VIT Campus</li>
              <li>Room: Tech Hub, Building 4</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string, text: string }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-club-orange transition-colors"
    >
      {text}
    </a>
  </li>
);

export default Footer;
