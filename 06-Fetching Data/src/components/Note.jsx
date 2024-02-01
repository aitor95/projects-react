import React from "react";

const Note = ({ title, body }) => {
  return (
    <div>
      <li>{title}</li>
      <p>{body}</p>
    </div>
  );
};

export default Note;
