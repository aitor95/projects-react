import React from 'react'
import Average from './Average'
import AveragePositive from './AveragePositive'
import StatisticLine from './StatisticLine'

const Statistics = ({ positive, negative, neutral, total }) => {
    if (total > 0) {
        return (
            <div>
                <StatisticLine text="good" value={positive} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={negative} />
                <StatisticLine text="total" value={total} />
                <Average positive={positive} negative={negative} total={total}></Average>
                <AveragePositive positive={positive} total={total}></AveragePositive>
            </div>
        )
    } else {
        return (
            <p>No feedback given</p>
        )
    }


}

export default Statistics