import React from "react";
import UsersWrapper from "../components/user/UsersWrapper";

import {FaPlus} from 'react-icons/fa'

const Users = ({ users }) => {
  return (
    <>
      <div className="container plus-button">
        <FaPlus />
      </div>
      <div className="container custom-scrol">
        <br />
        <br />
        <br />
        <h4>کاربران ثبت شده : </h4>
        <br />
        <br />
        <UsersWrapper users={users} />
      </div>
    </>
  );
};

export default Users;
