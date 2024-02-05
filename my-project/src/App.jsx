import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

console.warn(input,"testing");

  return (
    <>
    <div className='m-auto p-3'>
      <h1 className='font-bold text-3xl'>Todos</h1>
    </div>
     <form className='border-2 border-dashed border-red-500 p-2 w-[70%] m-auto  flex gap-4 justify-center' onSubmit={handleSubmit}>
      <input className=' border border-solid border-1 border-gray-500 py-2 px-3 rounded' placeholder='Enter the value...' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button className=' border border-solid border-1 border-gray-500 py-1 px-5 rounded' type='submit'>Add</button>
     </form>
    </>
  )
}

export default App
