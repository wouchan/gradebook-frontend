import { useAuth } from "./useAuth";

export const useRole = () => {
  const { user } = useAuth();

  const isStudent = user?.role === "student";
  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";

  return {
    isStudent,
    isTeacher,
    isAdmin,
    role: user?.role || "guest",
  };
};
