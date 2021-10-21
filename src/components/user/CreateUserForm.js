import React from "react";

const CreateUserForm = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1"> آی دی</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">نام</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" for="exampleCheck1">
            نام خانوادگی
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" for="exampleCheck1">
            کد ملی{" "}
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
