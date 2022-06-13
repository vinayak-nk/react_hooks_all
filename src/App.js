import React, { useState } from "react";
function App() {
  const [counter, updateCounter] = useState(0)
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      {counter}
      <button onClick={() => updateCounter(counter + 1)} >Increment</button>
      <button onClick={() => updateCounter(counter - 1)} >Decrement</button>
    </div>
  );
}

export default App;
