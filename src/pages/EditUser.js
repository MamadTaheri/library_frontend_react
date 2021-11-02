import React from "react";

import UserForm from "../components/user/UserForm";

const EditUser = () => {
  return (
    <div className="container col-md-6">
      <br />
      <br />
      <br />
      <br />
      <h1>ویرایش کاربر </h1>
      <br />
      <UserForm type="edit" />
    </div>
  );
};

export default EditUser;
