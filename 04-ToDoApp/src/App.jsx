import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const addNote = () => {
    const noteToAdd = {
      name: newName
    }
    setPersons([...persons, noteToAdd])
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form action="#" onSubmit={addNote}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p>{person.name}</p>)}
    </div>
  )
}

export default App