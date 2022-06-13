import React, { useReducer } from "react";

const initialState = { count: 0, showText: false }

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1, showText: state.showText }
    case "DECREMENT": return { count: state.count - 1, showText: state.showText }
    case "TOGGLETEXT": return { count: state.count, showText: !state.showText }
    default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>{state.count}</h2>
      <button onClick={() => {
        dispatch({ type: 'INCREMENT' })
        dispatch({ type: 'TOGGLETEXT' })
        }}
      >
        Increment
      </button>
      <button onClick={() => dispatch({type: 'DECREMENT'})} >Decrement</button>
      {state.showText && <span>Use Reducer HOOK</span>}
    </div>
  );
}

export default App;
