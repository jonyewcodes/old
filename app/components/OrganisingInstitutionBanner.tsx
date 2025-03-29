import React, { useState, useEffect } from "react";

interface Props {
  institutionImages: string[];
}

const OrganisingInstitutionBanner: React.FC<Props> = ({ institutionImages }) => {
  const [isBeating, setIsBeating] = useState(false);

  useEffect(() => {
    const heartbeat = () => {
      if (!isBeating) {
        setIsBeating(true);
        setTimeout(() => {
          setIsBeating(false);
        }, 500); 
      }
    };
    heartbeat();
    const interval = setInterval(heartbeat, 1200); 
    
    return () => clearInterval(interval);
  }, [isBeating]);

  return (
    <section className="w-full bg-[#fbfafb] py-12">
      <p className="text-center text-baseText text-xl mb-6">
        Built with{" "}
        <span className={`inline-block transition-transform duration-500 ${isBeating ? "heart-beat" : ""}`}>
          ❤️
        </span>{" "}
        by the Alumni of:
      </p>
      <div className="overflow-hidden mt-12">
        <div className="flex gap-8 animate-scroll h-[75px] sm:h-[125px] items-center">
          {[...institutionImages, ...institutionImages].map((img, index) => (
            <img
              key={index}
              src={img}
              className="h-full w-auto object-cover flex-shrink-0"
              alt={`Institution ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        
        @keyframes heartBeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1.1); }
          45% { transform: scale(1.25); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        
        .heart-beat {
          animation: heartBeat 0.5s ease-in-out;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default OrganisingInstitutionBanner;