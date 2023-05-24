import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {

    const total = course.parts.reduce(
        (acc, part) => acc + part.exercises, 0
    )

    return (
        <>
            <Header name={course.name}></Header>
            {
                course.parts.map(el =>
                    <Part
                        key={el.id}
                        name={el.name}
                        exercises={el.exercises}
                    />)
            }
            <strong>total of exercices: {total}</strong>
        </>
    )
};

export default Course