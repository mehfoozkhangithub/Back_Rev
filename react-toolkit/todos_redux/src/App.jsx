import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main hover:text-purple-500 hover:cursor-pointer">
        <h1 className="text-3xl font-bold underline bg-slate-200">
          Hello world!
        </h1>
      </div>
    </>
  );
}

export default App;
