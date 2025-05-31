import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentGrades from "./pages/student/Grades";

// Teacher Pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherClasses from "./pages/teacher/Classes";
import TeacherGrades from "./pages/teacher/Grades";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSubjects from "./pages/admin/Subjects";
import AdminClasses from "./pages/admin/Classes";
import AdminGrades from "./pages/admin/Grades";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* Student routes */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="student">
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="grades" element={<StudentGrades />} />
          </Route>
        </Route>

        {/* Teacher routes */}
        <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
          <Route path="teacher">
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="classes" element={<TeacherClasses />} />
            <Route path="classes/5" element={<TeacherGrades />} />
          </Route>
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="subjects" element={<AdminSubjects />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="grades" element={<AdminGrades />} />
          </Route>
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
