import React from "react";

const Note = ({ name, number }) => {
  return (
    <div>
      <li>{name}</li>
      <p>{number}</p>
    </div>
  );
};

export default Note;
