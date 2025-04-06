import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Button from 'react-bootstrap/Button';


const Products = () => {

    let [count,setCount] = useState(0);

    // 1st
   useEffect(()=> {
    console.log("Effect will run every render");
   })

   // 2nd
   useEffect(()=> {
    console.log("Effect will run only on Initial render");
   }, [])

   // 3rd
   useEffect(()=> {
    console.log("Effect will run only on dependency change");
   }, [count])

  return (
    <div>
        Products
        <Button variant="primary" onClick={ ()=> { setCount(count+1) } } > Increase </Button>

        <Link to="list"> Product List </Link>
        <Link to="details"> Product Details </Link>
        <Outlet/>
    </div>
  )
}

export default Products