"use client";
import React, { useState, useEffect } from "react";
import MoonDisplay from "../components/MoonDisplay";
import MoonPhaseInfo from "../components/MoonPhaseInfo";
import { getMoonPhase } from "../utils/moonPhase";

// Define a type for moon phases
type MoonPhaseType =
  | "New Moon"
  | "Waxing Crescent"
  | "First Quarter"
  | "Waxing Gibbous"
  | "Full Moon"
  | "Waning Gibbous"
  | "Third Quarter"
  | "Waning Crescent";

const MoonPhaseDetails: Record<MoonPhaseType, string> = {
  "New Moon":
    "The moon is positioned between the earth and sun, with the dark side facing us. A magical time for new beginnings and planting seeds of intention.",
  "Waxing Crescent":
    "The moon begins to illuminate. A time for growth, creation, and gathering energy for new projects.",
  "First Quarter":
    "Half the moon is illuminated. A time of decision, action, and overcoming challenges on your path.",
  "Waxing Gibbous":
    "Almost fully illuminated. A time for refinement, adjustment, and progress evaluation.",
  "Full Moon":
    "Completely illuminated as the earth is between the sun and moon. A time of culmination, clarity, and celebration.",
  "Waning Gibbous":
    "Light begins to decrease. A time for gratitude, sharing, and giving back to others.",
  "Third Quarter":
    "Half illuminated, decreasing. A time for release, letting go, and forgiveness.",
  "Waning Crescent":
    "The final sliver of light before darkness. A time for surrender, rest, and preparing for renewal.",
};

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moonPhase, setMoonPhase] = useState<MoonPhaseType>("New Moon");
  const [imageUrl, setImageUrl] = useState("/new-moon.webp");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const dateStr = selectedDate.toISOString().split("T")[0];
    const phase = getMoonPhase(dateStr) as MoonPhaseType;

    // Trigger transition effect
    setIsTransitioning(true);

    // Get image name from phase
    let imageName = phase.toLowerCase().replace(/ /g, "-");

    // Set a timeout to change the image after transition starts
    setTimeout(() => {
      setMoonPhase(phase);
      setImageUrl(`/${imageName}.webp`);

      // End transition
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 300);
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Create date at noon to avoid timezone issues
    const dateString = e.target.value;
    const selectedDate = new Date(dateString + "T12:00:00");
    console.log("Selected date:", selectedDate); // For debugging
    setSelectedDate(selectedDate);
  };

  return (
    <div
      className={`app-container ${
        isTransitioning ? "background-transition" : ""
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 1.5s ease",
      }}
    >
      <div className="content-wrapper">
        <header>
          <h1>Moon Phase</h1>
        </header>

        <div className="date-selector">
          <label htmlFor="date-picker">Select a date: </label>
          <input
            id="date-picker"
            type="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>

        <MoonDisplay phase={moonPhase} imageUrl={imageUrl} />
        <MoonPhaseInfo
          phaseName={moonPhase}
          phaseDetails={MoonPhaseDetails[moonPhase]}
        />
      </div>

      <style jsx>{`
        .app-container {
          padding: 2rem;
          color: #fff;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }
        .content-wrapper {
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 12px;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          backdrop-filter: blur(8px);
        }
        header {
          text-align: center;
          margin-bottom: 2rem;
        }
        h1 {
          font-size: 3rem;
          background: linear-gradient(to right, #e0e0ff, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .date-selector {
          margin: 1.5rem 0;
          text-align: center;
        }
        .date-selector label {
          margin-right: 1rem;
          font-size: 1.2rem;
        }
        .date-selector input {
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 5px;
          border: 1px solid #444;
          background: rgba(0, 0, 0, 0.6);
          color: white;
        }
      `}</style>
    </div>
  );
}
