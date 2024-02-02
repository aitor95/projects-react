import { useState } from "react";
import Note from "./components/Note";
import { useEffect } from "react";
import { addNote } from "./services/notes/addNote";
import { getAllNotes } from "./services/notes/getAllNotes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [important, setImportant] = useState(true)
  useEffect(() => {
    getAllNotes().then(notes => setNotes(notes))
  }, []);

  const handleClick = () => {
    setImportant(prev => !prev)
  }
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteToAdd = {
      content: newNote,
      important: Math.random() > 0.5
    };

    addNote(newNoteToAdd).then((note) => setNotes((prevNotes) => [...prevNotes, note]));
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClick}>{important ? 'Show All' : 'Show only important'}</button>

      <ol>
        {
          important ?
            notes
              .filter(note => note.important === important)
              .map((note) => (
                <Note key={note.id} {...note} notes={notes} setNotes={setNotes} />
              ))
            :
            notes
              .map((note) => (
                <Note key={note.id} {...note} notes={notes} setNotes={setNotes} />
              ))
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} />
        <button type="submit">add note</button>
      </form>
    </div>
  );
};

export default App;
