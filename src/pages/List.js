import React from "react";

export default function List({ employee, handleDelete, handleEdit }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });
  return (
    <div className="contain-table">
      <table class="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employee &&
            employee.length > 0 &&
            employee.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{formatter.format(item.salary)}</td> 
                <td>{item.date}</td>
                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    className="button muted-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
