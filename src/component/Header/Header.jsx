import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <p className="logo-title">Employee module</p>
        </Link>
      </div>
      <ul>
        <Link to="/add-employee">
          <li>Add Employee</li>
        </Link>
      </ul>
    </nav>
  );
}
