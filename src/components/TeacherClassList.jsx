import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ClassList = ({ classes }) => {
  if (classes.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Brak kursów do wyświetlenia.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Moje Kursy</h2>
        <p className="text-sm text-gray-600">Liczba kursów: {classes.length}</p>
      </div>

      <div className="divide-y divide-gray-200">
        {classes.map((classItem) => (
          <Link
            to={`/teacher/classes/${classItem.id}`}
            key={classItem.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 group"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {classItem.name}
              </h3>
            </div>

            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassList;
