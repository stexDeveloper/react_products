import { useEffect, useState } from "react";
import ProductService from "../services/productService";

const useFecth = (uslov) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (uslov === "category") {
      ProductService.getProductByCategory()
        .then((res) => {
          setData(res.data.products);
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    } else {
      ProductService.getAllProducts()
        .then((res) => {
          setData(res.data.products);
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return { data, isLoading };
};

export default useFecth;
