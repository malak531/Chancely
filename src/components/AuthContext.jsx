import React, { createContext, useState, useContext } from 'react';

// Create a context and provider
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Store the user's role

  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // Set the role on login
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null); // Clear the role on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to auth context
export const useAuth = () => useContext(AuthContext);
