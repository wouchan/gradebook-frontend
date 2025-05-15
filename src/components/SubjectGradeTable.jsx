import { useState, useEffect } from "react";
import Grade from "./Grade";

const SubjectGradeTable = ({ subjects }) => {
  const [sortedSubjects, setSortedSubjects] = useState([]);

  // Sort subjects by name alphabetically
  useEffect(() => {
    if (subjects && subjects.length) {
      const sorted = [...subjects].sort((a, b) => a.name.localeCompare(b.name));
      setSortedSubjects(sorted);
    }
  }, [subjects]);

  if (!subjects || subjects.length === 0) {
    return (
      <div className="text-gray-500 italic">Brak informacji o przedmiotach</div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Przedmiot</th>
            <th className="py-3 px-6 text-left">Oceny</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {sortedSubjects.map((subject, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-6 text-left font-medium">
                {subject.name}
              </td>
              <td className="py-3 px-6">
                <div className="flex flex-wrap gap-2">
                  {subject.grades &&
                    subject.grades.map((grade, gradeIndex) => (
                      <Grade key={gradeIndex} value={grade} />
                    ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectGradeTable;
