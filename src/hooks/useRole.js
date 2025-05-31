import { useAuth } from "./useAuth";

export const useRole = () => {
  const { user } = useAuth();

  const isStudent = user?.userType === "student";
  const isTeacher = user?.userType === "teacher";
  const isAdmin = user?.userType === "admin";

  return {
    isStudent,
    isTeacher,
    isAdmin,
    role: user?.userType || "guest",
  };
};
