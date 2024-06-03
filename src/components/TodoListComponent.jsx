import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

function TodoListComponent({ todoItems, setTodoItems }) {
  function removeTodo(id) {
    let removeTodo = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(removeTodo);
    toast.success("Task uspesno obrisan");
  }

  return (
    <div className="container mx-auto flex flex-col gap-[20px] items-center justify-center mt-[50px]">
      {todoItems.length > 0 ? (
        todoItems.map((todo) => {
          return (
            <div
              key={todo.id}
              className="bg-slate-300 w-[50%] p-[15px] rounded-lg flex justify-between items-center"
            >
              <h2>{todo.title}</h2>
              <MdDeleteForever
                size={32}
                color="red"
                onClick={() => removeTodo(todo.id)}
              />
            </div>
          );
        })
      ) : (
        <h2 className="text-[30px] font-extrabold text-green-500">
          Nemas nikakve taskove
        </h2>
      )}
    </div>
  );
}

export default TodoListComponent;
