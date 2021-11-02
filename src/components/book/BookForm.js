import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import swal from "sweetalert";

import { libraryContext } from "../../App";

const BookForm = ({type}) => {

  const {getBooksFromServer} = useContext(libraryContext);

  const [data, setData] = useState({
    name: "",
    category: "علمی",
    author: "",
    publish_year: "",
  });

  const history = useHistory();
  const {bookId} = useParams();

  useEffect(() => {
    if(type === "edit") {
        axios.get(`http://localhost:8085/api/book?id=${bookId}`)
        .then(response => {
          if(response.data !== null) {
            setData({
              name: response.data.name,
              category: response.data.category,
              author: response.data.author,
              publish_year: response.data.publish_year,
            })
          }
        })
    }
     
  }, [])

  const saveNewBook = () => {
    axios.post("http://localhost:8085/api/savenewbook", data)
      .then((response) => {
        swal({
          title: "اطلاعیه",
          text: "کتاب جدید با موفقیت ذخیره شد",
          icon: "success",
          button: "متوجه شدم",
        });
        getBooksFromServer();
        history.push("/books");
      })
      .catch((error) => console.log(error));
  };

  const updateBook = () => {
    const saveData = {...data, id: bookId}
    axios.post("http://localhost:8085/api/updatebook", saveData)
    .then(response => {
      console.log(response.data)
      swal({
        title: "اطلاعیه",
        text: "کتاب با موفقیت آپدیت شد",
        icon: "success",
        button: "متوجه شدم",
      });
      getBooksFromServer();
      history.push("/books");
    })
    .catch(error => console.log(error));
  }

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
    } else if(type === "create") {
      saveNewBook();
    } else if(type === "edit") {
      updateBook();
    }
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
        <button type="submit" className="btn btn-secondary mr-5" onClick={() => {history.push("/books")}} >
          انصراف
        </button>
      </form>
    </>
  );
};

export default BookForm;
