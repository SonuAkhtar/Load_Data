import { useState } from "react";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__container">
          <h2>Load Data on button-Click</h2>
          <Users />
        </div>
      </div>
    </>
  );
}

export default App;
