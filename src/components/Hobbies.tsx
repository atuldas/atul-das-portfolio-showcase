
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Mountain, Dumbbell, Tent } from "lucide-react";
import hobbiesData from "@/data/hobbies.json";

const Hobbies: React.FC = () => {
  const [hobbies] = useState(hobbiesData);

  const getHobbyIcon = (hobby: string) => {
    switch(hobby) {
      case "Playing Hockey":
        return <Dumbbell className="h-6 w-6 text-orange-500" />;
      case "Marathon Running":
        return <Dumbbell className="h-6 w-6 text-blue-500" />;
      case "Trekking":
        return <Mountain className="h-6 w-6 text-green-500" />;
      case "Canyoning":
        return <Tent className="h-6 w-6 text-purple-500" />;
      case "Reading Books":
        return <BookOpen className="h-6 w-6 text-red-500" />;
      default:
        return <Heart className="h-6 w-6 text-pink-500" />;
    }
  };

  return (
    <section id="hobbies" className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Hobbies</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-purple-100 dark:border-purple-900 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 w-40 shadow-md border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 p-3 rounded-full mb-3">
                      {getHobbyIcon(hobby)}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 text-center font-medium">{hobby}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
