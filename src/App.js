import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useState } from "react";

const TestContext = createContext(null);
function App() {
  const [text, setText] = useState("someText");

  return (
    <TestContext.Provider value={setText}>
      <div className="App">
        <p>useContext()</p>
      </div>
    </TestContext.Provider>
  );
}

function kid() {
  <p></p>;
}

export default App;
