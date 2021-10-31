import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";


const CreateUserForm = () => {
  const [data, setData] = useState({
    name: "",
    family: "",
    socialNumber: "",
  });

  const history = useHistory()

  console.log(history)

  const saveNewUser = () => {

    const saveNewUserUrl = "http://localhost:8085/api/savenewuser";

    axios
      .post(saveNewUserUrl, data)
      .then(response => {
        swal({
          title: "اطلاعیه",
          text: "کاربر جدید با موفقیت ذخیره شد",
          icon: "success",
          button: "متوجه شدم",
        });
        deleteData();
      })
      .catch(error => console.log(error));
  };

  const inputHandler = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (
      data.name === "" || data.family === "" || data.socialNumber === "" ) {
        swal({
          title: "هشدار",
          text: "وارد کردن تمام مقادیر الزامی است",
          icon: "error",
          button: "متوجه شدم",
        });
    } else {
      saveNewUser();
    }
  };

  const deleteData = () => {
    setData({
      name: "",
      family: "",
      socialNumber: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>نام</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label> نام خانوادگی </label>
          <input
            type="text"
            className="form-control"
            name="family"
            value={data.family}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label> </label>
          <label>کد ملی </label>
          <input
            type="number"
            className="form-control"
            name="socialNumber"
            value={data.socialNumber}
            onChange={inputHandler}
          />
        </div>
        <br />
        <br />

        <button type="submit" className="btn btn-primary">
          ذخیره
        </button>
        <button type="submit" className="btn btn-secondary mr-5" onClick={() => {history.push("/users")}} >
          انصراف
        </button>
      </form>
    </>
  );
};

export default CreateUserForm;
