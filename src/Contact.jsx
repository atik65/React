import React, { useState } from "react";

const Contact = () => {
  let [data, changedata] = useState({
    email: "",
    name: "",
    mobile: "",
    message: "",
  });
  let collectData = (event) => {
    let { name, value } = event.target;
    changedata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let submit = (event) => {
    event.preventDefault();
    alert(`
      Your name is : ${data.name} 
      Your Email is : ${data.email}
      Your Mobile Number is : ${data.mobile}
      Your Message is : ${data.message}
  `);
    changedata({
      email: "",
      name: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <>
      <div className="display-5 text-center mt-5"> Contact Form</div>
      <div className="container mt-5">
        <form onSubmit={submit}>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                autoComplete="off"
                type="text"
                readonly
                className="form-control"
                placeholder="something@email.com"
                id="staticEmail"
                name="email"
                value={data.email}
                onChange={collectData}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="inputPassword"
                name="name"
                value={data.name}
                onChange={collectData}
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="Mobile" className="col-sm-2 col-form-label">
              Mobile Number
            </label>
            <div className="col-sm-10">
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="inputPassword"
                name="mobile"
                value={data.mobile}
                onChange={collectData}
                placeholder="Enter Your Mobile Number"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Message for us
            </label>
            <div className="col-sm-10">
              <textarea
                autoComplete="off"
                type="text"
                className="form-control"
                id="inputPassword"
                name="message"
                value={data.message}
                onChange={collectData}
                placeholder="Tell us something to improve our system"
              />
            </div>
          </div>
          <div className="container text-center">
            <button type="submit" className="btn btn-outline-success mt-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
