import axios from "axios";
import React, { useState } from "react";

const CreateUserForm = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    family: "",
    socialNumber: "",
  });

  const saveNewUser = () => {
    const newUserData = {
      id: data.id,
      name: data.name,
      family: data.family,
      socialNumber: data.socialNumber,
    };

    const saveNewUserUrl = "http://localhost:8085/api/savenewuser";

    axios
      .post(saveNewUserUrl, newUserData)
      .then((response) => {
        alert(response.data + " status code = " + response.status);
        deleteData();
      })
      .catch((error) => console.log(error));
  };

  const inputHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      data.id === "" ||
      data.name === "" ||
      data.family === "" ||
      data.socialNumber === ""
    ) {
      alert("تمامی مقادیر الزامی است");
    } else {
      saveNewUser();
    }
  };

  const deleteData = () => {
    setData({
      id: "",
      name: "",
      family: "",
      socialNumber: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label> آی دی</label>
          <input
            type="number"
            className="form-control"
            name="id"
            value={data.id}
            onChange={inputHandler}
          />
        </div>
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
        <div className="form-check">
          <label> نام خانوادگی </label>
          <input
            type="text"
            className="form-control"
            name="family"
            value={data.family}
            onChange={inputHandler}
          />
        </div>
        <div className="form-check">
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
      </form>
    </>
  );
};

export default CreateUserForm;
