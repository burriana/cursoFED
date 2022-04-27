import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/productos",
  headers: {
    "Content-type": "application/json"
  }
});