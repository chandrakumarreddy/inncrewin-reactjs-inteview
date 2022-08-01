import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header/Header";
import employeeContext, { employeeReducer } from "./context/employee";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  const [employees, dispatch] = useReducer(employeeReducer, [
    {
      firstName: "test",
      lastName: "test",
      dob: "2022-08-03",
      designation: "2test",
      photo: "https://placehold.jp/3d4070/ffffff/150x150.png",
      experience: "2",
      id: "1",
    },
  ]);
  return (
    <employeeContext.Provider value={{ employees, dispatch }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-employee" exact element={<AddEmployee />} />
          <Route path="/edit-employee/:id" exact element={<EditEmployee />} />
        </Routes>
      </Router>
    </employeeContext.Provider>
  );
}

export default App;
