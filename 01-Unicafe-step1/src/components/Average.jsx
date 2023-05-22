import React from 'react'

const Average = ({ positive, negative, total }) => {
    let average = (positive - negative) / total
    return <p>average {average}</p>
}

export default Average