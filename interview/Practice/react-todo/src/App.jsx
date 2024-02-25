import React from "react";
import "./App.css";

function App() {
  const [task, setTask] = React.useState([]);
  const [query, setQuery] = React.useState("");

  // here we have EDIT state's
  const [toggleEditBtn, setToggleEditBtn] = React.useState(false);
  const [editId, setEditId] = React.useState(null);

  const handleTask = () => {
    if (query == "") {
      return;
    } else if (query && toggleEditBtn) {
      setTask(
        task.map((item, i) => {
          if (i === editId) {
            return { ...item, task: query };
          }
          return item;
        })
      );
      setToggleEditBtn(false);
      setQuery("");
      setEditId(null);
    } else {
      const newTask = { task: query };
      setTask([...task, newTask]);
      setQuery("");
    }
  };

  const handleEdits = (i) => {
    const editTask = task.find((item, id) => {
      return id === i;
    });
    setToggleEditBtn(true);
    setQuery(editTask.task);
    setEditId(i);
  };

  const handleDelete = (i) => {
    console.warn("i am delete");
    const updatedTasks = task.filter((items, index) => {
      return index !== i;
    });
    setTask(updatedTasks);
  };
  return (
    <>
      <main
        id="todo"
        className="flex flex-col justify-center items-center gap-4 py-11 mx-11 my-40 border-2 border-dashed border-green-700"
      >
        <section
          id="input"
          className="w-full flex justify-center items-center gap-3"
        >
          <input
            value={query}
            className="px-2 py-2 border-2 border-teal-700 capitalize rounded-lg w-[50%]"
            placeholder="enter the task"
            onChange={(e) => setQuery(e.target.value)}
          />
          {toggleEditBtn ? (
            <button
              className="px-4 py-2 uppercase text-yellow-700 border-2 border-yellow-700 rounded-md hover:text-white hover:border-transparent hover:bg-yellow-500 duration-300 ease-in-out"
              onClick={handleTask}
            >
              submit
            </button>
          ) : (
            <button
              className="px-4 py-2 uppercase text-blue-700 border-2 border-blue-700 rounded-md hover:text-white hover:border-transparent hover:bg-blue-500 duration-300 ease-in-out"
              onClick={handleTask}
            >
              add
            </button>
          )}
        </section>
        <section id="output" className="w-[80%] m-auto ">
          {task &&
            task.map((item, i) => (
              <main
                key={i}
                className="flex justify-between items-center p-2 shadow-lg"
              >
                <article className="text-white capitalize font-normal text-[18px]">
                  {item.task}
                </article>
                <section className="flex gap-3">
                  <button
                    className="capitalize 
               text-white px-4 py-2 rounded-lg border-[1px] border-gray-500 bg-green-700 hover:bg-transparent duration-300 ease-in-out hover:border-[1px] hover:border-green-700
              "
                    onClick={() => handleEdits(i)}
                  >
                    edits
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="capitalize text-white px-4 py-2 rounded-lg border-[1px] border-gray-500 bg-red-700 hover:bg-transparent duration-300 ease-in-out hover:border-[1px] hover:border-red-700"
                  >
                    delete
                  </button>
                </section>
              </main>
            ))}
        </section>
      </main>
    </>
  );
}

export default App;
