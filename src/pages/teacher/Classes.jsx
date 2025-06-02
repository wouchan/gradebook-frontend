import { getTeacherClasses } from "../../api/classes";
import { useState } from "react";
import { useEffect } from "react";
import TeacherClassList from "../../components/TeacherClassList";
import { useAuth } from "../../hooks/useAuth";

const Classes = () => {
  const { user } = useAuth();
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeacherClasses(user.teacherData.id);
      setClassData(data.classes);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Moje kursy</h1>
      <TeacherClassList classes={classData} />
    </div>
  );
};

export default Classes;
