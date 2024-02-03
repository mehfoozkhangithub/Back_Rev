import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";

function AddTodos() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-color duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="capitalize text-white bg-indigo-500 border-o py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        type="submit"
      >
        add todo
      </button>
    </form>
  );
}

export default AddTodos;
