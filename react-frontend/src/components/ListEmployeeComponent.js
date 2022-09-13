import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const history = useNavigate();
  const [employees, setEmployees] = useState([]); 
  const empId=(id)=>{
    history(`/updateemp/${id}`);
  }
  const viewEmp = (id) => {
    history(`/viewemp/${id}`);
  };
  const deleteEmp=(id,index)=>{ 
    setEmployees([...employees.slice(0, index), ...employees.slice(index + 1)]);
    axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
    .then((response) => {
      console.log('wwwwwwwwwwwwww',response);
    })
    .catch(() => {
      console.log("error in emp");
    })
    .finally(() => {
      console.log("finally block");
    });
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch(() => {
        console.log("error in emp");
      })
      .finally(() => {
        console.log("finally block");
      });
  }, []);
  return (
    <div className="container">
      <div className="d-flex p-3">
        <Link to="/addemployee" className="nav-link" aria-current="page">
          <button type="button" className="btn btn-success">
            Add Employees
          </button>
        </Link>
        <h2 className="text-center">Employee List</h2>
      </div>
      <div className="row mb-md-5">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.firstName}</td>
                  <td>{items.lastName}</td>
                  <td>{items.emailId}</td>
                  <td>
                    <button
                      onClick={() => {
                        empId(items.id);
                      }}
                      type="button"
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        deleteEmp(items.id,index);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        viewEmp(items.id);
                      }}
                      type="button"
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;


