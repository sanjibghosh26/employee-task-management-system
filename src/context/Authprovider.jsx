import { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/Localstorage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  // localStorage.clear()
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employeesData, adminData} = getLocalStorage();

    setUserData({
      employeesData,
      adminData
    });
  }, []);

  return (
    <AuthContext.Provider value={{userData,setUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;