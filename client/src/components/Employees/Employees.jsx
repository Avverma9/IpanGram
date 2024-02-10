import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Department/Department.css";

export default function Employees() {
  const [allData, setAllData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [name, setName] = useState("");
  const [doj, setDoj] = useState("");
  const [nameDepartment, setNd] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const admin = localStorage.getItem("owner");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        setAllData(response.data);
        setSortedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const sortData = (key) => {
    const order = key === sortKey ? -sortOrder : 1;
    const sorted = [...sortedData].sort((a, b) => {
      if (key === "name") {
        return a.name.localeCompare(b.name) * order;
      } else if (key === "address") {
        return a.address.localeCompare(b.address) * order;
      }
      return 0;
    });

    setSortedData(sorted);
    setSortKey(key);
    setSortOrder(order);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      setAllData((prevData) => prevData.filter((item) => item._id !== id));
      setSortedData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  const handleUpdate = async () => {
    if (!selectedDepartment) return;

    try {
      await axios.put(`http://localhost:5000/employees/${selectedDepartment._id}`, {
        name,
        doj,
        nameDepartment,
        email,
        phone,
        state,
        city,
        address,
        pinCode,
      });

      // Refetch data after successful update
      const response = await axios.get("http://localhost:5000/departments");
      setAllData(response.data);

      // Reset input fields after update
      setName("");
      setDoj("");
      setNd("");
      setEmail("");
      setPhone("");
      setState("");
      setCity("");
      setAddress("");
      setPinCode("");
      closeUpdateModal();
    } catch (error) {
      console.error("Error updating department:", error.message);
    }
  };

  const openUpdateModal = (department) => {
    setSelectedDepartment(department);
    setName(department.name);
    setDoj(department.doj);
    setNd(department.nameDepartment);
    setEmail(department.email);
    setPhone(department.phone);
    setState(department.state);
    setCity(department.city);
    setAddress(department.address);
    setPinCode(department.pinCode);
    setShowModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedDepartment(null);
    setName("");
    setDoj("");
    setNd("");
    setEmail("");
    setPhone("");
    setState("");
    setCity("");
    setAddress("");
    setPinCode("");
    setShowModal(false);
  };

  return (
    <div className="shared-container">
      <h2>Welcome Sir!</h2>  <button onClick={() => sortData("name")}>Sort by Name</button>
            <button onClick={() => sortData("address")}>Sort by Address</button>
      <hr />
      <h5>Below is the list of Employees</h5>
      <table>
        <thead>
          <tr>
            <th>#</th>
           <th>Name</th>
           <th>Address</th>
            <th>DOJ</th>
            <th>Dept. Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
            <th>City</th>
           
            <th>Pin Code</th>
            {admin && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <tr key={data._id}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.doj}</td>
              <td>{data.nameDepartment}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.state}</td>
              <td>{data.city}</td>
            
              <td>{data.pinCode}</td>
              {admin && (
                <td>
                  <button onClick={() => handleDelete(data._id)}>Delete</button>
                  <button onClick={() => openUpdateModal(data)}>Update</button>
                </td>
              )}
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
            <label>New Date of Joining:</label>
            <input
              type="date"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
            <label>New Email:</label>
            <input
              type="email"
              placeholder="New Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>New Phone:</label>
            <input
              type="tel"
              placeholder="New Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>New State:</label>
            <input
              type="text"
              placeholder="New State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label>New City:</label>
            <input
              type="text"
              placeholder="New City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label>New Address:</label>
            <input
              type="text"
              placeholder="New Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>New Pin Code:</label>
            <input
              type="text"
              placeholder="New Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}
