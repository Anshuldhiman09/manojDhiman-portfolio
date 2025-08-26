import { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [showHint, setShowHint] = useState(false);

  const handleDownloadClick = () => {
    setShowHint(true);

    // Hide the hint after 4 seconds
    setTimeout(() => {
      setShowHint(false);
    }, 4000);
  };

  return (
    <section className="section pt-28" id="home">
      <div className="container-lg grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Text */}
        <div>
          <p className="text-primary font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
            Manoj Dhiman
          </h1>
          <p className="mt-4 text-slate-300">
            Experienced Mechanical Manager | PET Recycling Specialist | 23+ Years in Industrial Maintenance
          </p>

          {/* CV Button (Triggers Hint) */}
          <button
            onClick={handleDownloadClick}
            className="inline-block mt-6 px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            Download CV
          </button>

          {/* Arrow Hint */}
          {showHint && (
            <div className="mt-4 flex flex-col items-start gap-2 animate-bounce">
              <ArrowDown className="text-primary w-6 h-6" />
              <p className="text-sm text-slate-300">
                Scroll down and click on the photo 👇
              </p>
            </div>
          )}
        </div>

        {/* Right: Circular Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="rounded-full overflow-hidden ring-4 ring-primary/50 shadow-lg 
                       shadow-primary/40 hover:scale-105 transition
                       w-64 h-64 sm:w-80 sm:h-80 md:w-64 md:h-64"
          >
            <img
              src="/WhatsApp Image 2025-08-24 at 12.18.30 PM.jpeg"
              alt="Manoj Dhiman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
