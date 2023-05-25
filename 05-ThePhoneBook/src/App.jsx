import { useEffect, useState } from 'react'
import Note from './Note'
import axios
  from 'axios'
export default function App() {

  useEffect(() => {
    // Using fetch from Javascript
    // fetch('http://localhost:3000/persons')
    //   .then(response => response.json())
    //   .then(json => {
    //     setpersons(json)
    //   })

    // Using Axios to fetch the data
    axios.get('http://localhost:3000/persons')
      .then(json => {
        setPersons(json.data)
      })
  }, [])

  const [persons, setPersons] = useState([])

  return (
    <>
      <h1>persons</h1>
      {persons.map(note => (
        <Note key={note.id} {...note} />
      ))}

    </>
  )
}
