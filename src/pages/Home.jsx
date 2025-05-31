import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useRole } from "../hooks/useRole";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth();
  const { isStudent, isTeacher, isAdmin } = useRole();
  const navigate = useNavigate();

  // Redirect authenticated users to their respective dashboards
  useEffect(() => {
    if (user) {
      if (isStudent) {
        navigate("/student/dashboard");
      } else if (isTeacher) {
        navigate("/teacher/dashboard");
      } else if (isAdmin) {
        navigate("/admin/dashboard");
      }
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Witaj w systemie GradeBook</h1>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Zaloguj się
      </button>
    </div>
  );
};

export default Home;
