// import { useEffect, useState } from "react";
import HamburgerMenuComponent from "./components/HamburgerMenuComponent";
import ListProductsComponent from "./components/ListProductsComponent";
import SingleProductComponent from "./components/SingleProductComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //state da smestimo podatke
  // const [isActive, setIsActive] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [allProducts, setAllProducts] = useState([]);
  //podatke zelimo kad se ucita nasa komponenta

  //ovaj hook ili funkcija ce se pokrenuti kad se ucita nasa komponenta
  //u tom trenutku kad se pokrene ja zelim podatke
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllProducts(data.products);
  //       setIsLoading(true);
  //     });
  //   // console.log("RADII");
  // }, []);

  // function handleActive() {
  //   setIsActive(true);
  // }

  return (
    <div>
      {/* <div className="flex flex-wrap gap-[40px] items-center justify-center">
        {isLoading ? (
          allProducts.map((product, index) => {
            return <ListProductsComponent key={product.id} product={product} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div> */}

      <HamburgerMenuComponent />

      <ListProductsComponent />

      <SingleProductComponent />

      {/* <button onClick={handleActive}>Click Me</button> */}

      <ToastContainer />
    </div>
  );
}

export default App;
