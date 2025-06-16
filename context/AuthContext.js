// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Can store basic user info

  // Simulate login
  const login = (userData) => {
    setIsAuthenticated(true);
    // Ensure userData has a role, or provide a default.
    // If userData itself is null/undefined, default to a guest-like creator.
    const defaultUser = { name: 'مستخدم تجريبي', email: '', role: 'creator' };
    const loggedInUser = {
      name: userData?.name || defaultUser.name,
      email: userData?.email || '', // Store email if provided
      role: userData?.role || defaultUser.role,
    };
    setUser(loggedInUser);
    console.log('AuthContext: User logged in', loggedInUser);
  };

  // Simulate logout
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log('AuthContext: User logged out');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
