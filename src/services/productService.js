import axios from "axios";

class ProductService {
  static getAllProducts = () => axios.get("/products");
  static getSingleProduct = () => axios.get("/products1");
}

export default ProductService;
