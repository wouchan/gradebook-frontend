import { getAllClasses } from "../../api/classes";
import { useState } from "react";
import { useEffect } from "react";
import ClassList from "../../components/ClassList";

const Classes = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllClasses();
      setClassData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Kursy</h1>
      <ClassList classes={classData} />
    </div>
  );
};

export default Classes;
