import { useState } from 'react'

const StatsDisplay = ({good, neutral, bad}) => (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
)

/*
const Feedback = () => {
  good: 0
  neutral: 0
  bad: 0
}


const handleGood = ({good}) => {
  setGood(good + 1)
  const Feedback {
    goodFeedback: 0
  }
  return (
    goodFeedback 1
  )
}
*/

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <StatsDisplay good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App