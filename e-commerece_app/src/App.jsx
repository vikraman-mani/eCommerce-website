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
