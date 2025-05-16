
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import skillsData from "@/data/skills.json";

const Skills: React.FC = () => {
  const [technicalSkills] = useState(skillsData.technical);
  const [softSkills] = useState(skillsData.soft);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Frontend":
        return "from-blue-400 to-cyan-300";
      case "Backend":
        return "from-purple-400 to-pink-300";
      case "DevOps":
        return "from-green-400 to-emerald-300";
      default:
        return "from-orange-400 to-amber-300";
    }
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-tr from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="border border-purple-100 dark:border-purple-900 shadow-lg overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${getCategoryColor(category.category)}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`mr-3 bg-gradient-to-br from-primary/20 to-blue-400/20 p-2 rounded-full`}>
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-gray-700 dark:text-gray-200 text-sm border border-gray-200 dark:border-gray-600"
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
          <Card className="border border-purple-100 dark:border-purple-900 shadow-lg overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-300"></div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full text-gray-700 dark:text-gray-200 text-sm border border-amber-200 dark:border-amber-800"
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
