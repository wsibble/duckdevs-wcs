import React from "react";
import Developer from "./Developer";
import "./css/people.css";

const People = (props) => {
  return (
    <>
      <h1>DEVELOPERS</h1>
      <div className="people__container">
        {props.data.map((developer) => (
          <Developer key={developer.id} data={developer} />
        ))}
      </div>
    </>
  );
};

export default People;
