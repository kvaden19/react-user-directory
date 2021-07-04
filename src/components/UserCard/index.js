import React from "react";
import './styles.css';

function UserCard(props) {
  return (
    <div className="card block overflow-auto m-4 p-4 bg-green-500 rounded-lg">
      <div className="img-container inline float-left">
        <img alt={props.last_name} src={props.image} />
      </div>
      <div className="ml-4 content inline float-left">
        <ul>
          <li><strong>First Name:</strong> {props.first_name}</li>
          <li><strong>Last Name:</strong> {props.last_name}</li>
          <li><strong>City:</strong> {props.city}</li>
          <li><strong>State:</strong> {props.state}</li>
          <li><strong>Email:</strong> {props.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;