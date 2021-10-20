import React from "react";

const User = ({user}) => {
  return (
    <>
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.family}</td>
        <td>{user.socialNumber}</td>
      </tr>
    </>
  );
};

export default User;
