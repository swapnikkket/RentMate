import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getMe = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("http://localhost:5000/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createListing = async (listingData) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    "http://localhost:5000/api/listings",
    listingData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getListings = async () => {
  const response = await axios.get("http://localhost:5000/api/listings");
  return response.data;
};

export const updateListing = async (id, updatedData) => {
  const token = localStorage.getItem("token");

  const response = await axios.put(
    `http://localhost:5000/api/listings/${id}`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteListing = async (id) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(
    `http://localhost:5000/api/listings/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
