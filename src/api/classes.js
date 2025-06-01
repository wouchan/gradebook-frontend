import apiClient from "./client";

export const getTeacherClasses = async (teacherId) => {
  const response = await apiClient.get(`/teachers/${teacherId}`);
  return response.data;
};

export const getAllClasses = async () => {
  const response = await apiClient.get("/classes");
  return response.data;
};
