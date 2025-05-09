import { useEffect, useRef, useState } from "react";

const MapLoader = () => {
  const [iframeLoaded, setiframeLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setiframeLoaded(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full h-80 rounded overflow-hidden bg-gray-200 shadow-md">
      <h2 className="text-xl md:text-2xl text-primary mb-6 font-semibold text-center py-3">
        Location
      </h2>
      {!iframeLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer">
          <div className="absolute bottom-4 left-4 text-gray-400 font-medium">
            Loading map...
          </div>
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15902.389819791279!2d7.063421627337016!3d4.838972603562448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1744883925744!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        className={`w-full h-64 rounded transition-opacity duration-700 ${
          iframeLoaded ? "opacity-100" : "opacity-0"
        }`}
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default MapLoader;
