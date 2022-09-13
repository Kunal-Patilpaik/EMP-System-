import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
const UpdateEmployeeComponent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data,setData]=useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
    };
    axios
      .put(`http://localhost:8080/api/v1/employees/${params.id}`, formData)
      .then((response) => {
        alert("Update Data Succesfully...!!!")
        navigate("/employee");
        console.log("bingoooooooo!!!!!!!!!!" , response);
      })
      .catch((error) => {
        console.log("ssssssssssssss" + error);
      })
      .finally(() => {
        console.log("inside finally");
      });
  };
   
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/employees/${params.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("error in emp");
      })
      .finally(() => {
        console.log("finally block");
      });
  }, [params.id]);
  console.log('ddddddddddddddddddddd',data);
  const getData = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={submitForm}>
        <h3 className="text-center">Update Employee</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First Name:
          </label>
          <input
            onChange={getData}
            value={data.firstName}
            name="firstName"
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName1" className="form-label">
            Last Name:
          </label>
          <input
            onChange={getData}
            value={data.lastName}
            name="lastName"
            type="text"
            className="form-control"
            id="exampleInputLastName1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Id:
          </label>
          <input
            value={data.emailId}
            name="emailId"
            type="email"
            onChange={getData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeComponent;

