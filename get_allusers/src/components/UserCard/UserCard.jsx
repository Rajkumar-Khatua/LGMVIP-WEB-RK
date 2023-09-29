import React from "react";
import "./UserCard.scss";
import InfoIcon from '@mui/icons-material/Info';
const UserCard = ({ users }) => {
  return (
    <div className="user-card-grid">
    {users.map((user) => (
      <div key={user.id} className="user-card">
        <img src={user.avatar} alt={user.first_name} />
        <div className="user-info">
          <p>User ID: {user.id}</p>
          <p>User Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <button className="moreInfoBtn">More Info <InfoIcon/></button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default UserCard;
