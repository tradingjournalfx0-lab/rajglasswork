import { useState } from "react";

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow-md transition hover:bg-black hover:text-white"
        >
          ✕
        </button>

        {/* Heading */}
        <div className="px-6 pt-7 text-center">
           <h2 className="text-3xl font-bold text-gray-900">
            Welcome
          </h2>

          <p className="mt-2 text-lg font-semibold text-orange-600">
            
          </p> 
        </div>

        {/* Image */}
        {/* <div className="mt-5">

          <img
            src="/images/ads/raj15.jpg"
            alt="Happy Independence Day"
            className="h-auto max-h-[450px] w-full object-cover"
          />
        </div> */}

        {/* Message */}
        <div className="px-6 py-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
           
          </p>

          <button
            onClick={() => setShowPopup(false)}
            className="mt-5 rounded-xl bg-black px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-gray-800"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}