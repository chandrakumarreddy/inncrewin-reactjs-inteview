import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployeeContext } from "../context/employee";
import "../styles/employee.css";

const initialState = {
  firstName: "",
  lastName: "",
  dob: "",
  designation: "",
  photo: "",
  experience: "",
};

export default function EditEmployee() {
  const params = useParams();
  const navigate = useNavigate();
  const { dispatch, employees } = useEmployeeContext();
  const _employee = employees.find((employee) => employee.id === params.id);
  const [employee, setEmployee] = useState(() =>
    _employee ? _employee : initialState
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_EMPLOYEE", payload: employee });
    navigate("/", { replace: true });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((s) => ({ ...s, [name]: value }));
  };
  return (
    <section className="add-employee-container">
      <h1>You are Editing Employee {employee.firstName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            aria-describedby="First name"
            placeholder="Enter first name"
            name="firstName"
            required
            value={employee.firstName}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            aria-describedby="last name"
            placeholder="Enter Last Name"
            name="lastName"
            required
            value={employee.lastName}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">dob</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            placeholder="Dob"
            name="dob"
            required
            value={employee.dob}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            className="form-control"
            id="designation"
            aria-describedby="Designation"
            placeholder="Enter Designation"
            name="designation"
            required
            value={employee.designation}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
        <div className="photo-wrapper">
          <div className="form-group photo-field">
            <label htmlFor="photo">Profile Photo Link</label>
            <input
              type="text"
              className="form-control"
              id="photo"
              aria-describedby="Profile photo link"
              placeholder="Enter Profile photo link"
              name="photo"
              required
              value={employee.photo}
              onChange={handleChange}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
          {employee.photo ? (
            <img
              src={employee.photo}
              alt={`user avatar`}
              width="64"
              height="64"
              className="avatar"
            />
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            aria-describedby="Add experience"
            placeholder="Enter experience"
            name="experience"
            required
            value={employee.experience}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
