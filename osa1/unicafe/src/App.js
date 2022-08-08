import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  if (stats[0] === 0 && stats[1] === 0 && stats[2] === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value = {stats[0]} />
          <StatisticLine text="neutral" value = {stats[1]} />
          <StatisticLine text="bad" value = {stats[2]} />
          <StatisticLine text="average" value = {stats[3]} />
          <StatisticLine text="positive" value = {(stats[4].toString().concat(" %"))} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics stats={[good, neutral, bad, (good-bad)/(good+neutral+bad), good*100/(good+neutral+bad)]} />
    </div>
  )
}

export default App