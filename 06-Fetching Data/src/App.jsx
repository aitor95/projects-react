import { useState } from "react";
import Note from "./components/Note";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((response) => response.json())
      .then((json) => setNotes(json));
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(response => {
    //   const {data} = response
    //   setNotes(data)})
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();

    const newNoteToAdd = {
      id: notes.length + 1,
      name: newNote,
      number: newNote,
    };
    setNotes((prevNotes) => [...prevNotes, newNoteToAdd]);
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={addNote}>
        <input onChange={handleChange} value={newNote} />
        <button type="submit">add note</button>
      </form>
    </div>
  );
};

export default App;
