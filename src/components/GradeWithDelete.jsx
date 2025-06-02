import { X } from "lucide-react";
import { deleteGrade } from "../api/grades";

const GradeWithDelete = ({ value, gradeId }) => {
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

  const handleDeleteClick = async (e) => {
    e.stopPropagation(); // Prevent event bubbling
    await deleteGrade(gradeId);
    location.reload();
  };

  return (
    <div className="relative group inline-block">
      <div
        className={`${bgColorClass} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md transition-transform group-hover:scale-105`}
      >
        {gradeValue}
      </div>

      {/* Delete button - appears on hover */}
      <button
        onClick={handleDeleteClick}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-100 scale-75 shadow-lg z-10"
        aria-label={`Delete grade ${gradeValue}`}
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
};

export default GradeWithDelete;
