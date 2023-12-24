import { useState } from 'react'

const Statistics = (props) => {
  const {
    good,
    neutral,
    bad,
    setGood,
    setNeutral,
    setBad
  } = props
  
  const average = (good + bad + neutral) / 3
  const positive = good / (good + bad + neutral) * 100
  return(
    <>
      <p>Give feedback</p>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + bad + neutral}</p>
      <p>Avegare: { average } </p>
      <p>Positive: { positive } %</p>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
       />
    </div>
  )
}

export default App
