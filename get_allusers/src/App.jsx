import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.scss";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar onClick={getUsers} />
      {loading ? (
        <CircularProgress />
      ) : (
        <UserCard users={users} className="card" />
      )}
    </div>
  );
}

export default App;
