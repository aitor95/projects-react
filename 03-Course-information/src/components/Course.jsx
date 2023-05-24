import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {

    const chapter = course.parts
    const total = chapter.reduce(
        (acc, chapter) => acc + chapter.exercises, 0
    )

    return (
        <>
            {<Header name={course.name}></Header>}

            {
                chapter.map(el =>
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