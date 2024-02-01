import { useState } from "react";
import Note from "./components/Note";
import { useEffect } from "react";
import { addNote } from "./services/notes/addNote";
import { getAllNotes } from "./services/notes/getAllNotes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    getAllNotes().then(notes => setNotes((prevNotes => [...prevNotes, notes])))
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteToAdd = {
      userId: 1,
      title: newNote,
      body: newNote,
    };

    addNote(newNoteToAdd).then((note) => setNotes((prevNotes) => [...prevNotes, note]));
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
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} />
        <button type="submit">add note</button>
      </form>
    </div>
  );
};

export default App;
