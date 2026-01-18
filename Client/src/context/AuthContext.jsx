import { createContext, useContext, useState, useEffect } from "react";
import { getMe } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const data = await getMe();
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(null);
      localStorage.removeItem("token");
      setError("Session expired. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, logout, login, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
