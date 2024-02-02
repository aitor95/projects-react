import React from "react";
import { useState } from "react";

const Note = ({ content, important, id, notes, setNotes}) => {
  const [isImportant, setIsImportant] = useState(important)

  const handleClick = () => {
   
    const updatedNote = {
      ...notes.find(note => note.id === id),
      important: !important  
    }
    setNotes((prevNotes) => prevNotes.map(note => note.id === id ? updatedNote : note ) )
    setIsImportant(!isImportant)
  }
  return (
    <div>
      <li>
        <span>{content}</span>
        <button onClick={handleClick}> {important ? 'make not important' : 'make important'}</button>
      </li>
      {}
    </div>
  );
};

export default Note;
