import { useState } from 'react'
import { Persons } from './components/Persons'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'

const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newPhone, setnewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const handleChangePhone = (event) => {
    setnewPhone(event.target.value)
  }

  const handleSearch = (event) => {
    const personToSearch = event.target.value
    const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(personToSearch))
    setFilteredPersons(personsFiltered)
  }

  const addNote = () => {
    const existsName = persons.some(person => person.name === newName);

    if (existsName) {
      alert(`${newName} is already added to the PhoneBook`)
    } else {
      const noteToAdd = {
        name: newName,
        phone: newPhone
      }
      setPersons([...persons, noteToAdd])
      setNewName("")
      setnewPhone("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        onSubmit={addNote}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App