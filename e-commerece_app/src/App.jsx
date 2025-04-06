import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import SignUp from './components/SignUp'

function App() {

  
  return (
     <div className='App'>
        <Home/>
        <Login/>
        <Products/>
        <SignUp/>
     </div>
  )
}

export default App