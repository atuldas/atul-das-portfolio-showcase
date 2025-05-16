
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import hobbiesData from "@/data/hobbies.json";

const Hobbies: React.FC = () => {
  const [hobbies] = useState(hobbiesData);

  return (
    <section id="hobbies" className="py-16 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Hobbies</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4 w-40">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 text-center">{hobby}</span>
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
