import React from "react";
import { Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Products = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Products;
