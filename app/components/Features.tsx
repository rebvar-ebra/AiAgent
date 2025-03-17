import React from "react";
import {
  Brain,
  MessageSquare,
  Image as ImageIcon,
  Sparkles,
  Video,
} from "lucide-react";

const features = [
  {
    title: "AI Analysis",
    description:
      "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transcription",
    description:
      "Get accurate transcriptions of your video. Perfect for creating subtitles, blog posts, or repurposing content.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Title Generation",
    description:
      "Enhance your content with AI-generated images. Perfect for thumbnails, backgrounds, and creative assets.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Thumbnail Generation",
    description:
      "Automatically enhance your videos with AI-powered filters, color correction, and effects for better quality.",
    icon: Sparkles,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Short Script",
    description:
      "Save time with AI-generated video summaries, making it easier for viewers to consume your content quickly.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Discuss with Your AI Agent",
    description:
      "Save time with AI-generated video summaries, making it easier for viewers to consume your content quickly.",
    icon: Video,
    iconBg: "bg-gray-100",
    iconColor: "text-black-600",
  },
];

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Content Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300 ${feature.iconBg}`}
            >
              <feature.icon className={`w-10 h-10 mb-4 ${feature.iconColor}`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
