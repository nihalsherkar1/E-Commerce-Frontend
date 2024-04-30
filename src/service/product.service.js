import axios from "axios";

const API_URL = "http://localhost:8080/products";

class ProductService {
  getProductById(id) {
    return axios.get(API_URL + "/" + id);
  }

  editProduct(product) {
    return axios.delete(API_URL + "/" + product.id, product);
  }
}

export default new ProductService();
