import { useEffect } from "react";
import SubjectGradeTable from "../../components/SubjectGradeTable";
import { getStudentGrades } from "../../api/grades";
import { useState } from "react";

const Grades = () => {
  // const subjectData = [
  //   { name: "Biologia", grades: [3, 4, 5, 2] },
  //   { name: "Chemia", grades: [4, 3, 4, 5] },
  //   { name: "Fizyka", grades: [1, 2, 3, 2] },
  // ];
  function groupGradesBySubject(gradesArray) {
    const grouped = {};

    // Group grades by subject
    gradesArray.forEach((item) => {
      if (!grouped[item.subjectName]) {
        grouped[item.subjectName] = [];
      }
      grouped[item.subjectName].push(item.grades);
    });

    // Convert to array of objects
    return Object.keys(grouped).map((subjectName) => ({
      name: subjectName,
      grades: grouped[subjectName],
    }));
  }

  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      const grades = await getStudentGrades(1);
      setSubjectData(groupGradesBySubject(grades));
    };

    fetchGrades();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Moje Oceny</h1>
      <SubjectGradeTable subjects={subjectData} />
    </div>
  );
};

export default Grades;
