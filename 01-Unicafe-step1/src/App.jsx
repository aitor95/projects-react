import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Average from './components/Average'
import AveragePositive from './components/AveragePositive'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)

    setAll(all + 1)
  }
  const handleNeutral = () => {

    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {

    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <Average positive={good} negative={bad} total={all}></Average>
      <AveragePositive positive={good} total={all}></AveragePositive>
    </div>

  )
}

export default App
