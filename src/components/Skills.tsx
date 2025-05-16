
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import skillsData from "@/data/skills.json";

const Skills: React.FC = () => {
  const [technicalSkills] = useState(skillsData.technical);
  const [softSkills] = useState(skillsData.soft);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 bg-primary/10 p-2 rounded-full">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">Soft Skills</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
