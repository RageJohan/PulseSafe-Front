
import React, { createContext, useState, useContext } from "react";


const AuthContext = createContext(null);


export const useAuth = () => {
  return useContext(AuthContext);
};


export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
