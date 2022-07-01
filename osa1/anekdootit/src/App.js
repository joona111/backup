import { useState } from 'react'
const points = new Uint8Array(7)
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

  
  
  const setPoints = () => {
    
    {points[selected]+=1}
    
  }
    
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]+" votes:"+points[selected]}
     <br></br> 
     
     <button onClick={()=>setSelected(Math.floor(Math.random()*anecdotes.length))}>next anecdote </button>
     <button onClick={() => {setPoints() }} >vote</button>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[points.indexOf(Math.max(...points))] + "votes:" + Math.max(...points)}</p>
     {console.log(Math.max(...points))}
    </div>
  )
}

export default App