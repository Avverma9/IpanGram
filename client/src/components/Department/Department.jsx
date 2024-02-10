import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Department.css";

export default function Department() {
  const [allData, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [numOfEmployees, setNumOfEmployees] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/departments");
        setAllData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/departments/${id}`);
      setAllData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting department:", error.message);
    }
  };

  const handleUpdate = async () => {
    if (!selectedDepartment) return;

    try {
      await axios.put(`http://localhost:5000/departments/${selectedDepartment._id}`, {
        name,
        numOfEmployees,
      });

      // Refetch data after successful update
      const response = await axios.get("http://localhost:5000/departments");
      setAllData(response.data);

      // Reset input fields after update
      setName("");
      setNumOfEmployees("");
      closeUpdateModal();
    } catch (error) {
      console.error("Error updating department:", error.message);
    }
  };

  const openUpdateModal = (department) => {
    setSelectedDepartment(department);
    setName(department.name);
    setNumOfEmployees(department.numOfEmployees);
    setShowModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedDepartment(null);
    setName("");
    setNumOfEmployees("");
    setShowModal(false);
  };

  return (
    <div className="shared-container">
      <h2>Welcome Sir!</h2>
      <hr />
      <h5>Below is the list of departments</h5>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Department Name</th>
            <th>Number of Employees</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data, index) => (
            <tr key={data._id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.numOfEmployees}</td>
              <td>{data.createdAt.substring(0, 10)}</td>
              <td>
                <button onClick={() => handleDelete(data._id)}>Delete</button>
                <button onClick={() => openUpdateModal(data)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeUpdateModal}>
              &times;
            </span>
            <h2>Update Department</h2>
            <label>New Department Name:</label>
            <input
              type="text"
              placeholder="New Department Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>New Number of Employees:</label>
            <input
              type="number"
              placeholder="New Number of Employees"
              value={numOfEmployees}
              onChange={(e) => setNumOfEmployees(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}
