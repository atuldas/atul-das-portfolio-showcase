
import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useThemeToggle";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <div className="pt-16 transition-all duration-500">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <About />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Experience />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Skills />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Education />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Certifications />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Hobbies />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
