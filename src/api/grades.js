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

export const createGrade = async (gradeData) => {
  const response = await apiClient.post(`/grades`, gradeData);
  return response.data;
};

export const deleteGrade = async (gradeId) => {
  const response = await apiClient.delete(`/grades/${gradeId}`);
  return response.data;
};
