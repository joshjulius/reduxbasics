import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, log } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(log())}>Click</button>
      {isLogged ? <h3>You are logged in</h3> : <h3>You are logged out</h3>}
    </div>
  );
}

export default App;
