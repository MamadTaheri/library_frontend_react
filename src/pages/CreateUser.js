import React from "react";

import UserForm from "../components/user/UserForm";

const CreateUser = () => {
  return (
    <div className="container col-md-6">
      <br />
      <br />
      <br />
      <br />
      <h1>ایجاد کاربر جدید</h1>
      <br />
      <UserForm type="create" />
    </div>
  );
};

export default CreateUser;
