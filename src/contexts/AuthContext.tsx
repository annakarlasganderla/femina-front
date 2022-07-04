import { createContext, useContext, useState } from "react";

interface AuthContextData {
    userType: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [userType, setUserType] = useState("cliente");

  return (
    <AuthContext.Provider value={{ userType }}>
      {children}
    </AuthContext.Provider>
  );
};
