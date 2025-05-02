import apiClient from "./client";

export const getStudentGrades = async (studentId) => {
  const response = await apiClient.get(`/grades/student/${studentId}`);
  return response.data;
};

export const getTeacherClassGrades = async (classId) => {
  const response = await apiClient.get(`/grades/class/${classId}`);
  return response.data;
};

export const getAllGrades = async (filters) => {
  const response = await apiClient.get("/grades", { params: filters });
  return response.data;
};

export const updateGrade = async (gradeId, gradeData) => {
  const response = await apiClient.put(`/grades/${gradeId}`, gradeData);
  return response.data;
};

// src/api/subjects.js
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
