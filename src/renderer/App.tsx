import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/renderer/App.tsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          &nbsp;|&nbsp;
          <a
            className="App-link"
            href="https://webpack.electron.build"
            target="_blank"
            rel="noopener noreferrer"
          >
            electron-webpack
          </a>
          &nbsp;|&nbsp;
          <a
            className="App-link"
            href="http://typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
