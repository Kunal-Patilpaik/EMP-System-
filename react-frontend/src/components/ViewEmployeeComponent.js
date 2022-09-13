import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ViewEmployeeComponent = () => {
  const params = useParams();
  const [data, setData] = useState([]);
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
  return (
    <div className="container">
      <div
        className="card"
        style={{
          width: "40rem",
          margin: "auto",
          marginTop: "2rem",
          padding: "3rem",
          backgroundColor: "#dde1e7",
        }}
      >
        <div className="d-flex align-items-center">
          <h5>Name Of The Employee: </h5>
          <h3
            style={{
              color: "blue",
            }}
          >
            {data.firstName}
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <h5>Employee sirname: </h5>
          <h3
            style={{
              color: "blue",
            }}
          >
            {data.lastName}
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <h5>Employee Email Id: </h5>
          <h3
            style={{
              color: "blue",
            }}
          >
            {data.emailId}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
