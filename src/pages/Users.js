import React from "react";
import UsersWrapper from "../components/user/UsersWrapper";

const Users = ({ users }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 p-5 text-center">
        <h4>کاربران ثبت شده : </h4>
        <br />
        <br />
        <UsersWrapper users={users} />
      </div>
    </div>
  );
};

export default Users;
