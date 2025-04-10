import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import WishList from "./components/WishList";

// Example
//Set local storage
localStorage.setItem("user", JSON.stringify([])); // JS to JSON format

// Get local storage
let dataWeb = JSON.parse(localStorage.getItem("user")); // JSON to JS format
console.log(dataWeb);

// Remove local storage
localStorage.removeItem("user");

// Code
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

function App() {
  let user = "Vikraman";
  return (
    <div className="app">
      <BrowserRouter>
        {/* <ol>
              <li>  <Link to="/"> Home </Link>  </li>
              <li>  <Link to={`/login/${user}`}> Login </Link>  </li>
              <li>  <Link to="/signup"> SignUp </Link>  </li>
              <li>  <Link to="/products"> Products </Link>  </li>
            </ol> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/updateProduct/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
