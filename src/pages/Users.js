import React from "react";
import UsersWrapper from "../components/user/UsersWrapper";

import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <>
      <div className="container plus-button">
        <Link to="/create-user">
          <FaPlus />
        </Link>
      </div>
      <div className="container custom-scrol">
        <h4>لیست کاربران ثبت شده : </h4>
        <br />
        <br />
        <UsersWrapper users={users} />
      </div>
    </>
  );
};

export default Users;
