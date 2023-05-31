import { useEffect, useState } from 'react'
import axios from 'axios'
import { Persons } from './components/Persons'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'

const App = () => {

  const SERVER_ROUTE = 'http://localhost:3000/persons'

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setnewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    // Using fetch from Javascript
    fetch(SERVER_ROUTE)
      .then(response => response.json())
      .then(json => {
        setPersons(json)
      })

    // Using Axios to fetch the data
    // axios.get(SERVER_ROUTE)
    //   .then(json => {
    //     setPersons(json.data)
    //   })
  }, [])


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

  const handleShowAll = () => {
    console.log(showAll)
    setShowAll(!showAll)
  }

  const addNote = (event) => {
    const existsName = persons.some(person => person.name === newName);

    if (existsName) {
      alert(`${newName} is already added to the PhoneBook`)
    } else {
      event.preventDefault()

      const newPerson = {
        name: newName,
        number: newPhone,
        important: Math.random() < 0.5
      }

      // POST USING AXIOS
      axios
        .post(SERVER_ROUTE, newPerson)
        .then(response => {
          setFilteredPersons([...filteredPersons, response.data])
        })
      setNewName("")
      setnewPhone("")
    }
  }

  useEffect(() => {
    setFilteredPersons(persons)
  }, [persons])

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
        addNote={addNote}>
      </PersonForm>
      <h2>Numbers</h2>
      <button onClick={handleShowAll}>
        {showAll ? "Show important" : "Show All"}
      </button>
      <Persons
        persons={filteredPersons}
        showAll={showAll}
      />
    </div>
  )
}

export default App