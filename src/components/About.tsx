
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import aboutData from "@/data/about.json";

const About: React.FC = () => {
  const [data, setData] = useState(aboutData);

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{data.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{data.title}</p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{data.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
