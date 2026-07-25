"use client";
import React, { createContext, useContext } from 'react';

const AuthContext = createContext({ isAuthenticated: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Provider value={{ isAuthenticated: false }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
