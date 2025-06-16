import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const fetchJobs = () => api.get("/jobs");
export const fetchUser = (token) =>
  api.get("/user", { headers: { Authorization: `Bearer ${token}` } });
export const uploadResume = (data) =>
  api.post("/resume", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export default api;
