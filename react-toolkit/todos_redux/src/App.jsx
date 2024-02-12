import "./App.css";
import AddTodos from "./Components/AddTodos";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <h1 className="capitalize bg-black">learn about redux toolkit</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
