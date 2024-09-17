import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Website Coming Soon!
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        Our website will be live soon. Stay tuned! In the meantime, check out
        these promotional videos.
      </p>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HqPJ9DB3b_A?si=O8b3JWmx2Aoew4Gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="w-full md:w-1/2">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zuh0NmxVknA?si=qkXyqIvhHyWWg0B9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
