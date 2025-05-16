
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import certificationsData from "@/data/certifications.json";

const Certifications: React.FC = () => {
  const [certifications] = useState(certificationsData);

  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.id} className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                    <h4 className="text-lg font-medium text-primary">{cert.issuer}</h4>
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
