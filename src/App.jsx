import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__container">
          <h2>Load Data on button-Click</h2>
          <main></main>
        </div>
      </div>
    </>
  );
}

export default App;
