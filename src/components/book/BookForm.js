import axios from "axios";
import React, { useState } from "react";

import swal from "sweetalert";


const BookForm = () => {
  const [data, setData] = useState({
    name: "",
    category: "علمی",
    author: "",
    publish_year: "",
  });

  const saveNewBook = () => {

    const saveNewUserUrl = "http://localhost:8085/api/savenewbook";

    axios
      .post(saveNewUserUrl, data)
      .then((response) => {
        swal({
          title: "اطلاعیه",
          text: "کتاب جدید با موفقیت ذخیره شد",
          icon: "success",
          button: "متوجه شدم",
        });
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
      data.name === "" || data.category === "" || data.author === "" || data.publish_year === "") {
        swal({
          title: "هشدار",
          text: "وارد کردن تمام مقادیر الزامی است",
          icon: "error",
          button: "متوجه شدم",
        });
    } else {
      saveNewBook();
    }
  };

  const deleteData = () => {
    setData({
      name: "",
      category: "علمی",
      author: "",
      publish_year: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>

        <div className="form-group">
          <label>  طبقه بندی کتاب   </label>
          <select className="form-control" name="category" value={data.category} onChange={inputHandler}>
            <option value='جنایی'> 
            جنایی
             </option>
            <option value='علمی'> 
            علمی
             </option>
            <option value='رمان'> 
            رمان
             </option>
          </select>
        </div>

        <div className="form-group">
          <label>نام کتاب</label>
          <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
        </div>

        <div className="form-group">
          <label>نویسنده</label>
          <input type="text" className="form-control" name="author" value={data.author} onChange={inputHandler} />
        </div>


        <div className="form-group">
          <label> </label>
          <label>سال انتشار</label>
          <input type="text" className="form-control" name="publish_year" value={data.publish_year} onChange={inputHandler} />

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

export default BookForm;
