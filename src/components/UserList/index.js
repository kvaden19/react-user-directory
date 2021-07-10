import React from "react";
import UserCard from '../UserCard';

const UserList = props => {

  const results = props.data;
  let users = results.map(user => 
      <UserCard 
        image = {user.picture.medium}
        firstName = {user.name.first}
        lastName = {user.name.last}
        city = {user.location.city}
        country = {user.location.country}
        email = {user.email}
        key = {user.name.last + user.location.postcode} // trying to improvise a unique ID
      />
    );

  return (
    <ul>
      { users }
    </ul>
  );

}

export default UserList;