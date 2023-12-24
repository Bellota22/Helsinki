import { useState } from 'react'

const StatisticLine = (props) => {
  const { text, value } = props
  return(
    <p>{text}: {value}</p>
  )
}

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
      
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />

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
