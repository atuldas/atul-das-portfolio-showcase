
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import educationData from "@/data/education.json";

const Education: React.FC = () => {
  const [education] = useState(educationData);

  return (
    <section id="education" className="py-16 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <Card key={edu.id} className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <h4 className="text-lg font-medium text-primary">{edu.institution}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
