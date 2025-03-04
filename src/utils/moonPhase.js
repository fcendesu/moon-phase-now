export const getMoonPhase = (dateStr) => {
    // Make sure we're working with a valid date
    const knownNewMoon = new Date("2000-02-28T12:00:00");
    let inputDate;
    
    try {
      // If dateStr is already a Date object
      if (dateStr instanceof Date) {
        inputDate = dateStr;
      } else {
        // Ensure we're parsing the date correctly
        inputDate = new Date(dateStr + 'T12:00:00');
      }
      
      // Check if date is valid
      if (isNaN(inputDate.getTime())) {
        console.error("Invalid date provided:", dateStr);
        return "New Moon"; // Default fallback
      }
    } catch (e) {
      console.error("Error parsing date:", e);
      return "New Moon"; // Default fallback
    }
    
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceNewMoon = (inputDate - knownNewMoon) / msPerDay;
    const lunarAge = daysSinceNewMoon % 29.53058867;
    
    // For debugging
    console.log("Input date:", inputDate);
    console.log("Days since new moon:", daysSinceNewMoon);
    console.log("Lunar age:", lunarAge);
  
    if (lunarAge < 1.84566) return "New Moon";
    if (lunarAge < 5.53699) return "Waxing Crescent";
    if (lunarAge < 9.22831) return "First Quarter";
    if (lunarAge < 12.91963) return "Waxing Gibbous";
    if (lunarAge < 16.61096) return "Full Moon";
    if (lunarAge < 20.30228) return "Waning Gibbous";
    if (lunarAge < 23.99361) return "Third Quarter";
    if (lunarAge < 27.68493) return "Waning Crescent";
  
    return "New Moon";
};
