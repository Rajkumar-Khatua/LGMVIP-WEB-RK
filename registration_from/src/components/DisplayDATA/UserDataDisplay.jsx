import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDataDisplay.css";

const UserDataDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from your API or MongoDB
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/users"); // Adjust the URL as needed
        setUsers(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      // Send a DELETE request to the server to delete the user by ID
      await axios.delete(`http://localhost:5000/api/users/${userId}`); // Adjust the URL as needed

      // Update the users state by removing the deleted user
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users"); // Adjust the URL as needed
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-data-display">
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Website</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>
                <img src={user.image} alt={user.name} />
              </td>
              <td>
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.website}
                </a>
              </td>
              <td>{user.gender}</td>
              <td className="skills">{user.skills.join(", ")}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteUser(user._id)}
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
};

export default UserDataDisplay;
