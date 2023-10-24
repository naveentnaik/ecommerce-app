import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import CheckoutSuccess from './pages/CheckoutSuccess';
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector((state)=>state.user.currentUser)
  
  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={ <Home/>}/>
           <Route path='/products/:category'  element={ <ProductList/>}/>
           <Route path='/product/:id' element={ <Product/>}/>
           <Route path='/cart' element={ <Cart/>}/>
           <Route path='/checkout-success' element={ <CheckoutSuccess/>}/>
           <Route path='/login' element={user ? <Navigate to="/" replace /> : <Login />}/>
           <Route path='/register'element={user ? <Navigate to="/" replace /> : <Register />}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
