import apiClient from "./client";

export const login = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    const { token, user } = response.data;

    // Store token in localStorage
    localStorage.setItem("token", token);

    return user;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout API call failed:", error);
    // Still remove the token even if API call fails
    localStorage.removeItem("token");
  }
};

export const checkAuthStatus = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    const response = await apiClient.get("/auth/status");
    return response.data.user;
  } catch (error) {
    localStorage.removeItem("token");
    return null;
  }
};
