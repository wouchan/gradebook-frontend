import { useState, useEffect } from "react";
import Grade from "./Grade";
import CreateGradeDialog from "./CreateGradeDialog";

const StudentsGradeTable = ({ students }) => {
  const [sortedStudents, setSortedStudents] = useState([]);

  // Sort students by last name alphabetically
  useEffect(() => {
    if (students && students.length) {
      const sorted = [...students].sort((a, b) =>
        a.lastName.localeCompare(b.lastName),
      );
      setSortedStudents(sorted);
    }
  }, [students]);

  if (!students || students.length === 0) {
    return (
      <div className="text-gray-500 italic">Brak informacji o uczniach</div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">No.</th>
            <th className="py-3 px-6 text-left">Nazwisko</th>
            <th className="py-3 px-6 text-left">Imię</th>
            <th className="py-3 px-6 text-left">Oceny</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {sortedStudents.map((student, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-6 text-left">{index + 1}</td>
              <td className="py-3 px-6 text-left font-medium">
                {student.lastName}
              </td>
              <td className="py-3 px-6 text-left">{student.firstName}</td>
              <td className="py-3 px-6">
                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2">
                    {student.grades &&
                      student.grades.map((grade, gradeIndex) => (
                        <Grade key={gradeIndex} value={grade} />
                      ))}
                  </div>
                  <CreateGradeDialog enrollmentId={student.enrollmentId} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage:
// const studentData = [
//   { firstName: "John", lastName: "Doe", grades: [3, 4, 5] },
//   { firstName: "Jane", lastName: "Smith", grades: [5, 6, 4] },
//   { firstName: "Alex", lastName: "Brown", grades: [2, 3, 1] }
// ];
// <StudentsTable students={studentData} />

export default StudentsGradeTable;
