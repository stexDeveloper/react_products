import axios from "axios";

class ProductService {
  static getAllProducts = () => axios.get("/products?limit=50&skip=80");
  static getProductByCategory = () => axios.get("/products1");
  // static getAllProducts = () => axios.get("/products");
  // static getSingleProduct = () => axios.get("/products1");
}

export default ProductService;

// https://dummyjson.com/products?limit=10&skip=10&select=title,price
