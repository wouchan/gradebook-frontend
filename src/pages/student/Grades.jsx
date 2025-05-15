import SubjectGradeTable from "../../components/SubjectGradeTable";

const Grades = () => {
  const subjectData = [
    { name: "Biologia", grades: [3, 4, 5, 2] },
    { name: "Chemia", grades: [4, 3, 4, 5] },
    { name: "Fizyka", grades: [1, 2, 3, 2] },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Moje Oceny</h1>
      <SubjectGradeTable subjects={subjectData} />
    </div>
  );
};

export default Grades;
