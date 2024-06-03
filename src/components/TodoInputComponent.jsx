import React, { useState } from "react";
import { toast } from "react-toastify";

function TodoInputComponent({ todoItems, setTodoItems }) {
  const [currentTodo, setCurrentTodo] = useState("");

  function handleTodoInput(event) {
    //da vidimo vrednost
    setCurrentTodo(event.target.value);
  }

  function handleTodo() {
    if (currentTodo) {
      setTodoItems([
        ...todoItems,
        { title: currentTodo, id: new Date().getTime() },
      ]);
      setCurrentTodo("");
      toast.success("Uspesno ste dodali task!!!");
    } else {
      toast.warning("Hej unesi neki TODO!!!");
    }
  }

  return (
    <div className="flex gap-[20px]">
      <input
        type="text"
        placeholder="Insert your Task"
        className="border-4 rounded-lg px-[20px] py-[10px] outline-none"
        onChange={handleTodoInput}
        value={currentTodo}
      />
      <button
        onClick={handleTodo}
        className="px-[20px] py-[10px] bg-green-600 text-white"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInputComponent;
