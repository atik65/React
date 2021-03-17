import React from "react";
import Card from "./Card";
import Obj from "./Obj";

const Service = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <h1 className="display-6">Gun Store</h1>
          <p>Choose You's....</p>
        </div>
        <div className="row d-flex justify-content-between ml-5">
          {Obj.map((v, i) => {
            return <Card key={i} imgsrc={v.img} title={v.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
