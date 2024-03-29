import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [nextItem, setNextItem] = useState("");
  const today = new Date();
  const dateString = ((today.getMonth()+1) + "/" + today.getDate());

  function handleSubmit(e){
    e.preventDefault();
    if (todos.length <= 4 && nextItem !== ""){
      setTodos( currentTodos => {
        return [
          {id: crypto.randomUUID(), title: nextItem}, 
          ...currentTodos
        ]
      })
      setNextItem("");
    }
  }

  function deleteTodo(id){
    setTodos( currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App" class = "h-screen w-screen bg-green-200 flex flex-col justify-center items-center">
      <div class = "w-2/5 max-md:w-[85%] flex flex-row justify-between">
        <h1 class = " font-Merienda  text-white text-7xl ml-4 max-[1000px]:text-5xl">Todo...</h1>
        <h1 class = " font-Merienda  text-white text-7xl mr-4 max-[1000px]:text-5xl">{dateString}</h1>
      </div>
      <div class = "w-2/5 max-md:w-[85%] h-4/6 bg-green-400 rounded-3xl flex flex-col items-center">
        <form 
          class = "h-[30%] w-[70%] flex flex-col justify-center"
          onSubmit = {handleSubmit}
        > 
          <div class = "h-1/3 w-full flex flex-row justify-center items-center ">
            <input
              class = "w-full h-full border-4 border-yellow-300 bg-slate-50 rounded-l-lg pl-4 outline-none"
              placeholder = "Add a todo"
              maxLength={31}
              value = {nextItem}
              onChange = {e => (setNextItem(e.target.value))}
            >
            </input>
            <button
              class = "w-1/4 h-full bg-yellow-300 rounded-r-lg font-serif font-bold"
            >
              Add
            </button>
          </div>
        </form>
        <div class = "w-5/6 h-[65%] bg-green-600 rounded-3xl flex flex-col items-center p-2">
            {todos.map( todo => {
              return(
                <div class = "w-full h-[19%] bg-slate-100 rounded-3xl flex flex-row my-1">
                  <p
                    class = "w-4/5 max-[1000px]:w-3/5 max-sm: text-sm h-full items-center flex flex-row pl-6 text-black font-bold font-serif text-pretty"
                  >
                  {todo.title}</p>
                  <div class = "w-1/5 max-[1000px]:w-2/5 h-full items-center flex flex-row justify-center">
                    <button 
                      class = " bg-slate-200 rounded-full p-2 font-bold font-sans"
                      onClick={() =>deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
            
        </div>
      </div>
    </div>
  );
}

export default App
