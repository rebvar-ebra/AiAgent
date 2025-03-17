import { BrainCircuit, MessageSquareCode, Video } from "lucide-react";
import React from "react";

const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your YouTube video URL and let your AI agent get to work.",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal AI agent analyzes every aspect of your content.",
    icon: BrainCircuit,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get actionable insights and strategic recommendations.",
    icon: MessageSquareCode,
  },
];

function WorkingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Your AI Agent in 3 Simple Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingSection;
