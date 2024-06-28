import React from "react";

const Developer = (props) => {
  return (
    <div
      key={props.data.id}
      className={`people__card duck${Math.floor(Math.random() * 4) + 1}`}
    >
      <div className="card__content">
        <h2>{props.data.name}</h2>
        <p>{props.data.role}</p>
        <button
          onClick={function () {
            window.location.href = props.data.githubLink;
          }}
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default Developer;
