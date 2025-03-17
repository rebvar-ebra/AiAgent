import React from "react";

function Page() {
  return (
    <div className="xl:container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p>Left</p>
        </div>
        {/* Right Side */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p>Right</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
