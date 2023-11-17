// ProfilePage.js

import React from "react";

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  companyId: "ABC123",
  employeeId: "E12345",
  isAdmin: true,
};
import "./ProfileCard.css";

function ProfilePage() {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="card-container">
        <header className="h-fit">
          <h1 className="mt-5 text-2xl font-semibold">Profile</h1>
          <img
            src="https://i.pinimg.com/564x/b1/48/73/b14873640078e7a2a5689cdd979dc623.jpg"
            alt={user.lastName}
          />
        </header>
        <h1 className="bold-text">
          {user.firstName}{" "}
          <span className="normal-text">
            {user.isAdmin ? "(Admin)" : "(Not Admin)"}
          </span>
        </h1>
        <h2 className="normal-text">Company ID: {user.companyId}</h2>
        <div className="social-container">
          {/* <div className="followers">
            <h1 className="bold-text">sssID</h1>
            <h2 className="smaller-text">{user.</h2>
          </div> */}
          <div className="likes">
            <h1 className="bold-text">Phone Number</h1>
            <h2 className="smaller-text mt-1">{user.phone}</h2>
          </div>
          <div className="photos">
            <h1 className="bold-text">Email</h1>
            <h2 className="smaller-text mt-1">{user.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
