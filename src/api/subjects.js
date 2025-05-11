import apiClient from "./client";

export const getStudentSubjects = async (studentId) => {
  const response = await apiClient.get(`/subjects/student/${studentId}`);
  return response.data;
};

export const getTeacherSubjects = async (teacherId) => {
  const response = await apiClient.get(`/subjects/teacher/${teacherId}`);
  return response.data;
};

export const getAllSubjects = async () => {
  const response = await apiClient.get("/subjects");
  return response.data;
};