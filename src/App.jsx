import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductService from "./services/productService";
import axios from "axios";
import useFecth from "./utils/useFecth";
import CardComponent from "./components/CardComponent";
import NavbarComponent from "./components/NavbarComponent";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  //smesti sve todoove
  // const [todoItems, setTodoItems] = useState([]);

  // useEffect(() => {
  //   ProductService.getAllProducts()
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   ProductService.getSingleProduct()
  //     .then((res) => console.log(res.data.products))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   console.log(todoItems);
  // }),
  //   [todoItems];

  const { data, isLoading } = useFecth("");

  return (
    <div className="container mx-auto">
      <NavbarComponent />
      {/* <TodoInputComponent todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems} /> */}
      {/* Our Prododucts  */}
      <div className="flex flex-wrap gap-[20px] items-center justify-center mt-[300px]">
        {isLoading ? (
          data.map((product) => {
            return <CardComponent key={product.id} product={product} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
