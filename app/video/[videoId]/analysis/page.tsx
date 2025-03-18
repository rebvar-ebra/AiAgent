import React from "react";

function Page() {
  return (
    <div className="xl:container mx-auto px-4 md:px-0 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Side: Analysis & Video Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Video Analysis</h2>

          {/* YouTube Video Details */}
          <div className="mb-4">
            <h3 className="text-lg font-medium">YouTube Video Details</h3>
            <p className="text-gray-600">Metadata and insights go here...</p>
          </div>

          {/* Thumbnail */}
          <div className="mb-4">
            <h3 className="text-lg font-medium">Thumbnail</h3>
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Thumbnail Image]</span>
            </div>
          </div>

          {/* Title Generation */}
          <div>
            <h3 className="text-lg font-medium">Title Generation</h3>
            <p className="text-gray-600">AI-generated title suggestions go here...</p>
          </div>
        </div>

        {/* Right Side: Additional Information / Actions */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Additional Insights</h2>
          <p className="text-gray-600">More details, analytics, or recommendations...</p>
        </div>

      </div>
    </div>
  );
}

export default Page;
