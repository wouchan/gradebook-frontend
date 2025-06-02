import apiClient from "./client";

export const getUsers = async () => {
  const response = await apiClient.get(`/users`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await apiClient.post(`/auth/register`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await apiClient.delete(`/users/${userId}`);
  return response.data;
};
