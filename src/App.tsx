import React from "react";
import "./App.css";
import { ItemsContainer } from "./containers/item.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ItemsContainer /> */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
