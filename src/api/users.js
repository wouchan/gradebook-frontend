import apiClient from "./client";

export const getUsers = async () => {
  const response = await apiClient.get(`/users`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await apiClient.post(`/auth/register`, userData);
  return response.data;
};
