import { useEffect } from "react";
import StudentGradeTable from "../../components/StudentGradeTable";
import { getClassGrades } from "../../api/grades";
import { useState } from "react";
import { useParams } from "react-router";

const Grades = () => {
  const [subjectData, setSubjectData] = useState([]);
  const { classId } = useParams();

  function groupGradesByStudent(gradeRecords) {
    const studentMap = new Map();

    // Group grades by student
    gradeRecords.forEach((record) => {
      const { grade, enrollment, student } = record;
      const { firstName, lastName } = student;
      const { id } = enrollment;
      const key = `${firstName}_${lastName}`;

      if (!studentMap.has(key)) {
        studentMap.set(key, {
          enrollmentId: id,
          firstName,
          lastName,
          grades: [],
        });
      }

      studentMap
        .get(key)
        .grades.push({ id: grade.id, value: grade.gradeValue });
    });

    // Convert map to array
    return Array.from(studentMap.values());
  }

  useEffect(() => {
    const fetchGrades = async () => {
      const grades = await getClassGrades(classId);
      setSubjectData(groupGradesByStudent(grades));
    };

    fetchGrades();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Oceny Studentów</h1>
      <StudentGradeTable students={subjectData} />
    </div>
  );
};

export default Grades;
