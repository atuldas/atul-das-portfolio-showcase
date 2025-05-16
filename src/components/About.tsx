
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import aboutData from "@/data/about.json";

const About: React.FC = () => {
  const [data, setData] = useState(aboutData);
  const initials = data.name.split(" ").map(n => n[0]).join("");

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
        <Card className="max-w-3xl mx-auto overflow-hidden">
          <div className="w-full lg:flex">
            <div className="lg:w-1/3 p-6 flex justify-center items-center">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
                <AvatarImage src={data.profileImage} alt={data.name} />
                <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="pt-6 lg:w-2/3">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{data.name}</h1>
                <p className="text-xl text-primary mb-6">{data.title}</p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{data.description}</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
