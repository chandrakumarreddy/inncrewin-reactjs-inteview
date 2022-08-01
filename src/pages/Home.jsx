import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeList from "../component/EmployeeList";
import { useEmployeeContext } from "../context/employee";
import "../styles/home.css";

export default function Home() {
  const { employees } = useEmployeeContext();
  const navigate = useNavigate();
  return (
    <section className="home-container">
      {employees.length ? (
        <div className="employee-list">
          <div className="flex">
            <h2>Employee list</h2>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/add-employee")}
            >
              add employee
            </button>
          </div>
          <EmployeeList />
        </div>
      ) : (
        <div>
          <div className="flex-end">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/add-employee")}
            >
              add employee
            </button>
          </div>
          <div>
            <h3>No employees found</h3>
          </div>
        </div>
      )}
    </section>
  );
}
