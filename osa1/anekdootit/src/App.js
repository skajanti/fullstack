import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleRandomClick = () => {
    let res = selected
    while (res === selected){
      res = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(res)
  }

  const handleVoteClick = () => {
    let res = [...votes]
    res[selected] += 1
    setVotes(res)
  }

  const mostVotes = () => {
    let res = 0
    for (let i = 0; i < votes.length; i++) {
      res = votes[i] > votes[res] ? i : res
    }
    return res
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleRandomClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes()]}
    </div>
  )
}

export default App