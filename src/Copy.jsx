import React from "react";
import { NavLink } from "react-router-dom";

const Copy = (props) => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className=" col-md-6 order-2 order-md-1 d-flex justify-content-center mt-0 mt-md-5 flex-column">
            <h1>Ready for Third world war</h1>
            <h2>Be prepeare & be strong</h2>
            <br />
            <p>Welcome to {props.Name} page 😄</p>
            This is{" "}
            <a
              style={{
                textDecoration: "none",
              }}
              href="https://www.facebook.com/atik.selfibazz/"
              className="text-primary"
              target="_blank"
            >
              {" "}
              Atik Hasan{" "}
            </a>
            <p>And It's is my First React Project..</p>
            <div className="mt-3">
              <button className="btn btn-sm btn-outline-primary">
                <NavLink to="/service" className="link start">
                  Get Started
                </NavLink>
              </button>
            </div>
          </div>
          <div className=" col-md-6 order-2 order-md-1 img-fluid mt-0 mt-md-5 homeImg ">
            <img
              className="svg_image animation"
              src={props.image}
              alt="HomePage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Copy;
