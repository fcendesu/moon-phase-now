import React from "react";
import Image from "next/image";

type MoonPhaseType =
  | "New Moon"
  | "Waxing Crescent"
  | "First Quarter"
  | "Waxing Gibbous"
  | "Full Moon"
  | "Waning Gibbous"
  | "Third Quarter"
  | "Waning Crescent";

interface MoonDisplayProps {
  phase: MoonPhaseType;
  imageUrl: string;
}

const MoonDisplay: React.FC<MoonDisplayProps> = ({ phase, imageUrl }) => {
  return (
    <div className="moon-display">
      <div className="moon-image-container">
        <Image
          src={imageUrl}
          alt={phase}
          width={200}
          height={200}
          priority
          style={{ borderRadius: "50%" }}
        />
      </div>
      <style jsx>{`
        .moon-display {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }
        .moon-image-container {
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default MoonDisplay;
