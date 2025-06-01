import apiClient from "./client";

export const getStudentGrades = async (studentId) => {
  const response = await apiClient.get(`/grades/student/${studentId}`);
  return response.data;
};

export const getClassGrades = async (classId) => {
  const response = await apiClient.get(`/grades/class/${classId}`);
  return response.data;
};

export const updateGrade = async (gradeId, gradeData) => {
  const response = await apiClient.put(`/grades/${gradeId}`, gradeData);
  return response.data;
};
