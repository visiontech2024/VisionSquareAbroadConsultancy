import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Website Coming Soon!
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-12 text-center">
        Our website will be live soon. Stay tuned! In the meantime, check out these promotional videos.
      </p>

      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-5xl">
        <div className="w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/HqPJ9DB3b_A?si=O8b3JWmx2Aoew4Gu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Zuh0NmxVknA?si=qkXyqIvhHyWWg0B9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
