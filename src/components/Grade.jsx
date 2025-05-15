import React from "react";

const Grade = ({ value }) => {
  // Ensure value is between 1 and 6
  const gradeValue = Math.min(Math.max(parseInt(value) || 1, 1), 6);

  // Define color mapping based on grade value
  const colorMapping = {
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-yellow-500",
    4: "bg-lime-500",
    5: "bg-green-500",
    6: "bg-green-700",
  };

  // Get the appropriate background color class
  const bgColorClass = colorMapping[gradeValue];

  return (
    <div
      className={`${bgColorClass} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md`}
    >
      {gradeValue}
    </div>
  );
};

export default Grade;
