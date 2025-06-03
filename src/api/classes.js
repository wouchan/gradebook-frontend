import apiClient from "./client";

export const getTeacherClasses = async (teacherId) => {
  const response = await apiClient.get(`/teachers/${teacherId}`);
  return response.data;
};

export const getAllClasses = async () => {
  const response = await apiClient.get("/classes");
  return response.data;
};

export const createClass = async (classData) => {
  const response = await apiClient.post(`/classes`, classData);
  return response.data;
};

export const deleteClass = async (classId) => {
  const response = await apiClient.delete(`/classes/${classId}`);
  return response.data;
};
