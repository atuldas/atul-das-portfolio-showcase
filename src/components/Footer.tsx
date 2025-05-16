
import React, { useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import contactData from "@/data/contact.json";

const Footer: React.FC = () => {
  const [contact] = useState(contactData);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={`mailto:${contact.email}`} 
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm mb-6">
            <p>{contact.email}</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-primary/20 hover:bg-primary/30 text-primary rounded-full p-3 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="mt-8 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Atul Das. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
