import Usage from "@/app/components/Usage";
import React from "react";

function Page() {
  return (
    <div className="xl:container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col gap-4 bg-white lg:border-r border-gray-200 p-6">
          {/* Anaysis */}
          <Usage />
          {/* Youtube */}
          {/* Anaysis */}
          {/* Anaysis */}
          <p>left</p>
        </div>
        {/* Right Side */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
          <p>chat</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
