
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import certificationsData from "@/data/certifications.json";

const Certifications: React.FC = () => {
  const [certifications] = useState(certificationsData);

  const getCertificationColor = (index: number) => {
    const colors = ["text-amber-600", "text-blue-600", "text-purple-600", "text-green-600", "text-red-600"];
    return colors[index % colors.length];
  };
  
  const getCertificationBgColor = (index: number) => {
    const colors = ["from-amber-400/20 to-yellow-400/20", "from-blue-400/20 to-cyan-400/20", 
                    "from-purple-400/20 to-pink-400/20", "from-green-400/20 to-emerald-400/20", 
                    "from-red-400/20 to-rose-400/20"];
    return colors[index % colors.length];
  };

  return (
    <section id="certifications" className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={cert.id} className="mb-6 border border-amber-100 dark:border-amber-900 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className={`mr-4 bg-gradient-to-br ${getCertificationBgColor(index)} p-3 rounded-full`}>
                    <Award className={`h-6 w-6 ${getCertificationColor(index)} dark:opacity-90`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                    <h4 className={`text-lg font-medium ${getCertificationColor(index)} dark:opacity-90`}>{cert.issuer}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
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

export default Certifications;
