import React from "react";
import User from "./User";

const UsersWrapper = ({ users }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">آی دی</th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">کد ملی</th>
            <th scope="col">ویرایش</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
          
           
        </tbody>
      </table>
    </>
  );
};

export default UsersWrapper;
