import { useEffect } from "react";
import SubjectGradeTable from "../../components/SubjectGradeTable";
import { getStudentGrades } from "../../api/grades";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Grades = () => {
  const { user } = useAuth();
  const [subjectData, setSubjectData] = useState([]);

  function groupGradesBySubject(gradesArray) {
    const grouped = {};

    // Group grades by subject
    gradesArray.forEach((item) => {
      if (!grouped[item.class.name]) {
        grouped[item.class.name] = [];
      }
      grouped[item.class.name].push(item.grade.gradeValue);
    });

    // Convert to array of objects
    return Object.keys(grouped).map((name) => ({
      name,
      grades: grouped[name],
    }));
  }

  useEffect(() => {
    const fetchGrades = async () => {
      const grades = await getStudentGrades(user.studentData.id);
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
