import React from "react";

interface MoonPhaseInfoProps {
  phaseName: string;
  phaseDetails: string;
}

const MoonPhaseInfo: React.FC<MoonPhaseInfoProps> = ({
  phaseName,
  phaseDetails,
}) => {
  return (
    <div className="moon-info">
      <h2>{phaseName}</h2>
      <p>{phaseDetails}</p>
      <style jsx>{`
        .moon-info {
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          padding: 1.5rem;
          margin-top: 2rem;
          text-align: center;
        }
        h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
          color: #f0f0f0;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default MoonPhaseInfo;
