import React from 'react'
import { useStateValue } from './state/state'
import './app.scss'
import './index.scss'

const App = () => {
  const [{ count }, dispatch] = useStateValue()

  function inc() {
    dispatch({ type: 'INC' })
  }
  function dec() {
    dispatch({ type: 'DEC' })
  }

  return (
    <div className="app">
      <h1>Bare react app</h1>
      <strong>{count}</strong>
      <br />
      <div>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => inc()}>Increment</button>
      </div>
    </div>
  );
}

export default App