import Form from "next/form";
import AnalyseButton from "./AnalyseButton";
import { analyzeYoutubeVideo } from "@/actions/analyesYoutubeVideo";

export default function YoutubeVideoForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form
        action={analyzeYoutubeVideo}
        className="flex flex-col md:flex-row gap-2 items-center"
      >
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <input
          className="flex-1 h-10 w-full px-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-transparent transition-all duration-300"
          name="url"
          type="text"
          placeholder="Enter YouTube URL"
        />
        <AnalyseButton />
      </Form>
    </div>
  );
}
