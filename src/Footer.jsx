import React from "react";

const Footer = () => {
  return (
    <>
      <div className="conatianer w-100  text-center mb-2 mt-5">
        <p>
          &copy;{" "}
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href="https://www.facebook.com/atik.selfibazz/"
            target="_blank"
          >
            Atik Hasan.
          </a>
          2021 All Rights Reserverd | Terms and Condition's
        </p>
      </div>
    </>
  );
};

export default Footer;
