import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Placeholder for actual authentication logic
    if (username === 'user' && password === 'pass') {
      setUser({ username });
      return { success: true };
    }
    return { success: false };
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return { login, logout, isAuthenticated, user };
}