import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Button from 'react-bootstrap/Button';


const Products = () => {
  return (
    <div>
        Products
        <Button variant="primary"> Increase </Button>

        <Link to="list"> Product List </Link>
        <Link to="details"> Product Details </Link>
        <Outlet/>
    </div>
  )
}

export default Products