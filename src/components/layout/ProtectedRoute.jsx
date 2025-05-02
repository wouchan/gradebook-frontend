import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRole } from "../../hooks/useRole";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();
  const { role } = useRole();

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified and user's role is not included, redirect to appropriate dashboard
  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect based on role
    if (role === "student") {
      return <Navigate to="/student/dashboard" replace />;
    } else if (role === "teacher") {
      return <Navigate to="/teacher/dashboard" replace />;
    } else if (role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }

    // Fallback to login if role is unknown
    return <Navigate to="/login" replace />;
  }

  // If everything is fine, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
