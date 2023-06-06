import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
export default function Add({ employee, setEmployee, setAdding, editId }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });
  const textInput = useRef(null);
  // const [title, setTitle] = useState("Add Employee");

  const [editnew, setedinew] = useState(editId);

  console.log("editnew", editnew);

  useEffect(() => {
    textInput.current.focus();
    if (editId !== null) {
      let emp = employee.find((item) => item.id == editId); // for getting  id data
      console.log("emp", emp);
      setData(emp);
    }
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.salary ||
      !data.date
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error !",
        text: "All Field are required",
        showConfirmButton: true,
      });
    }

    let newEmp = employee.find((item) => item.id == editId); // for edit id

    if (editId == null) {
      let newEmployee = {
        id: employee.length + 1,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        salary: data.salary,
        date: data.date,
      };
      employee.push(newEmployee);
      setEmployee(employee);
      setAdding(false);
    } else {
      let editedEmployee = {
        id: newEmp.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        salary: data.salary,
        date: data.date,
      };
      const index = employee.findIndex((el) => el.id === editId);
      employee[index] = editedEmployee;
      setEmployee(employee);
      setAdding(false);
    }

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${data.firstName} ${data.lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>{editnew == null ? "Add Employee " : "Edit Employee"}</h1>
        <label htmlFor="firstName">FirstName</label>
        <input
          ref={textInput}
          type="text"
          value={data.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          value={data.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          value={data.salary}
          name="salary"
          onChange={handleChange}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={data.date}
          name="date"
          onChange={handleChange}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => {
              setAdding(false);
              // setedinew(null);
            }}
          />
        </div>
      </form>
    </div>
  );
}
