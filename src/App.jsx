import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [studentData, setStudentData] = useState([]);
  // const [toggle, setToggle] = useState();
  const fetData = () => {
    axios.get("http://localhost:8080/students").then((res) => {
      setStudentData(res.data);
    });
  };
  useEffect(() => {
    fetData();
  }, []);

  // const handleChange = (e) => {
  //   setToggle(toggle);
  // };
  return (
    <div className="App">
      <button className="togglebtn">Add a new student</button>

      <ShowStudents id="ss" studentData={studentData} />
      <AddStudent id="as" fetData={fetData} />

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}

      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
