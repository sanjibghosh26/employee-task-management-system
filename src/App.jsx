import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from "react";

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/Authprovider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const { userData: authdata } = useContext(AuthContext);

  // =========================
  // CHECK LOGGED IN USER
  // =========================

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);

      // Temporary data
      setLoggedInUserData(userData.data);
    }
  }, []);

  // =========================
  // SYNC LOGGED-IN EMPLOYEE
  // WITH UPDATED CONTEXT DATA
  // =========================

  useEffect(() => {
    if (!authdata || !user) return;

    // Employee হলে
    if (user === "employee") {
      const loggedInUser = localStorage.getItem(
        "loggedInUser"
      );

      if (!loggedInUser) return;

      const savedUser = JSON.parse(loggedInUser);

      const updatedEmployee =
        authdata.employeesData.find(
          (employee) =>
            employee.id === savedUser.id
        );

      if (updatedEmployee) {
        setLoggedInUserData(updatedEmployee);
      }
    }

    // Admin হলে
    if (user === "admin") {
      setLoggedInUserData(authdata.adminData);
    }
  }, [authdata, user]);

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (email, password) => {
    if (!authdata) return;

    // =========================
    // ADMIN LOGIN
    // =========================

    if (
      email === authdata.adminData.email &&
      password === authdata.adminData.password
    ) {
      setUser("admin");

      setLoggedInUserData(
        authdata.adminData
      );

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: authdata.adminData,
        })
      );

      return;
    }

    // =========================
    // EMPLOYEE LOGIN
    // =========================

    const employee =
      authdata.employeesData.find(
        (employee) =>
          employee.email === email &&
          employee.password === password
      );

    if (employee) {
      setUser("employee");

      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          id: employee.id,
          data: employee,
        })
      );

      return;
    }

    alert("Invalid Credentials");
  };
  const currentEmployee =
  authdata?.employeesData?.find(
    (emp) => emp.id === loggedInUserData?.id
  ) || loggedInUserData;

  // =========================
  // UI
  // =========================

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard
          data={loggedInUserData}
        />
      ) : (
        <EmployeeDashboard
          data={currentEmployee}
        />
      )}
    </>
  );
};

export default App;