import React, { useState } from "react";
import { employeesData } from "../data//index";
import Swal from "sweetalert2";
import Add from "./Add";
import Header from "./Header";
import List from "./List";

function Dashbord() {
  const [employee, setEmployee] = useState(employeesData);
  const [adding, setAdding] = useState(false);
  // const [editing, setEditing] = useState(null);
  const [edit, setEdit] = useState(null);

  // console.log("editing",edit);
  // const [selectEmp,setSelectEmp]= useState(null)

  const handleEdit = (id) => {
    if (id) {
      setEdit(id);
      setAdding(true);
    }
  };

  // const setKey = (flag)=>{
  //   setEdit(flag)
  // }

  // const handleDelete = (id) => {
  //   setEmployee(employee.filter(user=>user.id !==id))
  //   // setEmployee(employee.filter(employee => employee.id !== id));
   
  //   console.log(id);

  // };
  const handleDelete = (id) => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then(resp => {
        if (resp.value) {
            const [data] = employee.filter(users => users.id === id);

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${data.firstName} ${data.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 2500,
            });

            // setEmployee(employee.filter(emp => emp.id !== id));
            setEmployee((employee.filter(items=>items.id !==id)))
        }
    });
}

  return (
    <div className="container">
      {/* //List */}
      {!adding && (
        <div>
          <Header setAdding={setAdding} />
          <List
            employee={employee}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
      {adding && (
        <Add
          employee={employee}
          setAdding={setAdding}
          setEmployee={setEmployee}
          editId={edit}
        />
      )}
    </div>
  );
}

export default Dashbord;
