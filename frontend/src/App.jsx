import {React,useState} from 'react'
import Navbar from './components/NavBar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Footer from './components/Footer/Footer'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Loginpopup from './components/LoginPopUp/loginpopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'



const App = () => {

  const [Showlogin, setShowlogin]=useState(false)
  return (
    <>  

    {Showlogin?<Loginpopup  setShowlogin={setShowlogin}/>:<></>}       
    <div className='app'>
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/cart' element={<Cart/>} />

          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path= '/myorders' element={<MyOrders/>}/>

      </Routes>
    </div>
   <Footer/>
    </>

  
  )}
  
       // <Route path='/order' element={<PlaceOrder/>} />

export default App
