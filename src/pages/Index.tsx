
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
        <div className="pt-16">
          <About />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Hobbies />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
