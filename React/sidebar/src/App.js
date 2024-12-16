import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [state, setState] = useState(false);

  const handleSidebar = () => {
    return setState(!state);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={handleSidebar} id="sidebar">
          <i>menu</i>
        </button>
        {state ? <Sidebar /> : null}
      </div>
    </div>
  );
}

export default App;
