import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {
    return (
        <Fragment>
            <Header name={course.name}></Header>
            {
                course.parts.map(el =>
                    <Part
                        key={el.id}
                        name={el.name}
                        exercises={el.exercises}
                    />)
            }
        </Fragment>
    )
};

export default Course