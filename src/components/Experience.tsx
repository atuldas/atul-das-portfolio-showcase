
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import experienceData from "@/data/experience.json";

const Experience: React.FC = () => {
  const [experiences] = useState(experienceData);

  const getCompanyColor = (index: number) => {
    const colors = [
      "from-blue-500 to-cyan-400",
      "from-purple-500 to-indigo-400",
      "from-green-500 to-emerald-400",
      "from-orange-500 to-amber-400"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-bl from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="mb-6 overflow-hidden border border-blue-100 dark:border-blue-900 shadow-lg">
              <div className={`h-2 bg-gradient-to-r ${getCompanyColor(index)}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-gradient-to-br from-primary/20 to-blue-400/20 p-3 rounded-full">
                    <Briefcase className={`h-6 w-6 text-primary`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
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

export default Experience;
