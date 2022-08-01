import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../context/employee";

export default function EmployeeList() {
  const navigate = useNavigate();
  const { employees, dispatch } = useEmployeeContext();
  const handleDelete = (employee) => {
    if (
      window.confirm(`are you sure you want to delete ${employee.firstName}`)
    ) {
      dispatch({ type: "DELETE_EMPLOYEE", payload: employee.id });
    }
  };
  return (
    <table className="table table-striped table-dark">
      <thead className="thead-dark">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">DOB</th>
          <th scope="col">Designation</th>
          <th scope="col">profile photo</th>
          <th scope="col">Experience</th>
          <th scope="col">update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <th scope="row">{employee.firstName}</th>
            <td>{employee.lastName}</td>
            <td>{employee.dob}</td>
            <td>{employee.designation}</td>
            <td>
              <img
                src={employee.photo}
                alt={`user avatar`}
                width="64"
                height="64"
                className="avatar"
              />
            </td>
            <td>{employee.experience}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/edit-employee/${employee.id}`)}
              >
                UPDATE
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(employee)}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
