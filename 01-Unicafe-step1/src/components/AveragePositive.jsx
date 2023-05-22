import React from 'react'

const AveragePositive = ({ positive, total }) => {
    let pos = positive / total
    let averagePositive = pos * 100
    return (
        <p>positive {averagePositive}</p>
    )
}

export default AveragePositive