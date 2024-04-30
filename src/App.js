import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Products from "./Components/Products";
import EditProduct from "./Components/EditProduct";
import Cart from "./Components/Cart";
import AdminNavbar from "./Components/AdminNavbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/adminnav" element={<AdminNavbar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
