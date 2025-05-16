
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import educationData from "@/data/education.json";

const Education: React.FC = () => {
  const [education] = useState(educationData);

  return (
    <section id="education" className="py-16 bg-gradient-to-tl from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card key={edu.id} className="mb-6 border border-green-100 dark:border-green-900 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-gradient-to-br from-green-400/20 to-teal-400/20 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <h4 className="text-lg font-medium text-green-600 dark:text-green-400">{edu.institution}</h4>
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
