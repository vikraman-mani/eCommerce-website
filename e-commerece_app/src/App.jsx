import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import SignUp from './components/SignUp'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
     <div className='app'>

        <BrowserRouter>
            <ol>
              <li>  <Link to="/">Home</Link>  </li>
              <li>  <Link to="/login">Login</Link>  </li>
              <li>  <Link to="/signup">SignUp</Link>  </li>
              <li>  <Link to="/products">Products</Link>  </li>
            </ol>

            <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/login" element={<Login/>} />
                 <Route path="/signup" element={<SignUp/>} />
                 <Route path="/products" element={<Products/>} />
            </Routes>

        </BrowserRouter>
     </div>
  )
}

export default App