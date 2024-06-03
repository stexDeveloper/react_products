import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoInputComponent from "./components/TodoInputComponent";
import TodoListComponent from "./components/TodoListComponent";
import { useEffect, useState } from "react";
import ProductService from "./services/productService";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  //smesti sve todoove
  // const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    ProductService.getSingleProduct()
      .then((res) => console.log(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log(todoItems);
  // }),
  //   [todoItems];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-[60px] text-green-600 font-extrabold my-[30px]">
        LODO App
      </h1>

      {/* <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems} />

      <ToastContainer /> */}
    </div>
  );
}

export default App;
