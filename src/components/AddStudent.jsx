import React from "react";
import axios from "axios";
import "./AddStudent.css";

export const AddStudent = ({ fetData }) => {
  const initial_stage = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: "",
  };

  const [studntInfo, setStudentInfo] = React.useState(initial_stage);

  const {
    first_name,
    last_name,
    email,
    gender,
    age,
    tenth_score,
    twelth_score,
    preferred_branch,
  } = studntInfo;

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    setStudentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const handleChange = (e) => {
  //   if (e.target.name === "first_name") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       first_name: e.target.value,
  //     });
  //   }
  //   if (e.target.name == "last_name") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       last_name: e.target.value,
  //     });
  //   }
  //   if (e.target.name == "email") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       email: e.target.value,
  //     });
  //   }
  //   if (e.target.name == "age") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       age: e.target.value,
  //     });
  //   }

  //   if (e.target.name == "tenth_score") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       tenth_score: e.target.value,
  //     });
  //   }
  //   if (e.target.name == "twelth_score") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       twelth_score: e.target.value,
  //     });
  //   }
  //   if (e.target.name == "preferred_branch") {
  //     setStudentInfo({
  //       ...studntInfo,
  //       preferred_branch: e.target.value,
  //     });
  //   }
  // };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("form:", studntInfo);
    axios.post("http://localhost:8080/students", studntInfo);
    setStudentInfo(initial_stage);
    fetData();
  }
  return (
    <form onSubmit={handleSubmit} className="addstudent">
      <div>
        Firstname:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="first_name"
          value={first_name}
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          onChange={handleChange}
          type="text"
          name="last_name"
          value={last_name}
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={handleChange}
            name="gender"
            className="male"
            type="radio"
            value={"Male"}
          />{" "}
          Female{" "}
          <input
            onChange={handleChange}
            name="gender"
            className="female"
            type="radio"
            value={"Female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={age}
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="tenth_score"
          value={tenth_score}
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="twelth_score"
          value={twelth_score}
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          value={preferred_branch} // select dropdown needs both value and onChange attributes
          onChange={handleChange}
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="">Select</option>
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
