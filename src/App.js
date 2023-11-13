
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginPage from './Pages/Login_Signup';
import menBanner from './Components/Assests/banner_mens.png'
import womenBanner from './Components/Assests/banner_women.png'
import kidsBanner from './Components/Assests/banner_kids.png'


import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={menBanner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={womenBanner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
