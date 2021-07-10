import React from "react";
import './styles.css';

const UserCard = props => {
  return (
    <li>
    <div className="card block overflow-auto m-4 p-4 bg-green-500 rounded-lg">
      <div className="img-container inline float-left">
        <img alt={props.lastName} src={props.image} />
      </div>
      <div className="ml-4 content inline float-left">
        <ul>
          <li><strong>First Name:</strong> {props.firstName}</li>
          <li><strong>Last Name:</strong> {props.lastName}</li>
          <li><strong>City:</strong> {props.city}</li>
          <li><strong>Country:</strong> {props.country}</li>
          <li><strong>Email:</strong> {props.email}</li>
        </ul>
      </div>
    </div>
    </li>
  );
}

export default UserCard;