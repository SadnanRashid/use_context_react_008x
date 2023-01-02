import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useState } from "react";

const TestContext = createContext(null);
function App() {
  const [text, setText] = useState("someText");

  return (
    <TestContext.Provider value={setText}>
      <div className="App">
        <p>{text}</p>
        <Kid />
      </div>
    </TestContext.Provider>
  );
}

function Kid() {
  const setText = useContext(TestContext);
  setText("sadnan");
  return (
    <div>
      <p>{setText}</p>
    </div>
  );
}

export default App;
