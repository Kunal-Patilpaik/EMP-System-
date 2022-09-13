import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const AddEmployee = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const empty = () => {
    setData({
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };
  console.log("ddddddddddddddddd", data);
  const getData = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
    };
    axios
      .post("http://localhost:8080/api/v1/employees", formData)
      .then((response) => {
        console.log("succesfull" + response);
        alert("Employee Data updated succesfully..!!!");
        navigate("/employee");

      })
      .catch((error) => {
        console.log("ssssssssssssss" + error);
      })
      .finally(() => {
        console.log("inside finally");
      });
  };
  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={submitForm}>
        <h3 className="text-center">Add Employee</h3>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">
            First Name:
          </label>
          <input
            name="firstName"
            onChange={getData}
            value={data.firstName}
            placeholder="Enter first name"
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputLastName1" class="form-label">
            Last Name:
          </label>
          <input
            name="lastName"
            onChange={getData}
            value={data.lastName}
            placeholder="Enter last name"
            type="text"
            className="form-control"
            id="exampleInputLastName1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email Id:
          </label>
          <input
            value={data.emailId}
            name="emailId"
            onChange={getData}
            placeholder="Enter email id"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Save
        </button>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <button onClick={empty} type="button" class="btn btn-danger">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
