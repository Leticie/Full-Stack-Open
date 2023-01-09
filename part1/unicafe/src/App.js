import { useState } from 'react'

const Button = ({handle, display}) => <button onClick={() => handle()}>{display}</button>


const Statistics = ({good, neutral, bad}) => {
  const count = good + neutral + bad
  
  if (count === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )  
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="average" value={countAverage (good, neutral, bad)}/>
        <StatisticLine text="positive" value={countGoodPercentage (good, neutral, bad)}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)  

const countAverage = (goodCount, neutralCount, badCount) => {
  const goodPoints = goodCount
  const neutralPoints = 0
  const badPoints = badCount - (2 * badCount)

  const sum = goodPoints + neutralPoints + badPoints
  const numberOfVotes = goodCount + neutralCount + badCount

  if (numberOfVotes === 0) {
    return 0
  }
  
  return sum / numberOfVotes
}

const countGoodPercentage = (goodCount, neutralCount, badCount) => {
  const sum = goodCount + neutralCount + badCount

  if (sum === 0) {
    return 0
  }

  const percentage = goodCount / sum * 100

  return `${percentage} %`
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handle={handleGood} display="good" />
      <Button handle={handleNeutral} display="neutral" />
      <Button handle={handleBad} display="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App