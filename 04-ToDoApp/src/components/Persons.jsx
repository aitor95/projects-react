import React from 'react'

export const Persons = ({ persons, showAll }) => {
    return (
        <>
            {
                showAll ?
                    persons.map(person =>
                        <p key={person.id}>{person.name} {person.number} </p>)

                    : persons
                        .filter(person => person.important == true)
                        .map(person =>
                            <p key={person.id}>{person.name} {person.number} </p>)

            }
        </>
    )
}
