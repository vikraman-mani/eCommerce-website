import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Products = () => {
  return (
    <div>
        Products
        <Link to="list"> Product List </Link>
        <Link to="details"> Product Details </Link>
        <Outlet/>
        <Button variant="primary"> Increase </Button>
    </div>
  )
}

export default Products