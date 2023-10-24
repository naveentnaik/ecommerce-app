import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
 console.log(admin)
  return (
    <BrowserRouter>
      {admin &&  <Topbar/>}
      <div className="container">
      {admin &&  <Sidebar/>}
      <Routes>
        {!admin && <Route path="/login" element={<Login/>} />}
        {admin &&  <Route path="/" element={<Home/>} />}
        {admin &&  <Route path="/users" element={<UserList/>}/>}
        {admin &&  <Route path="/user/:userID" element={<User/>}/>}
        {admin &&   <Route path="/newUser" element={<NewUser/>}/>}
        {admin &&   <Route path="/products" element={<ProductList/>}/>}
        {admin &&   <Route path="/product/:productId" element={<Product/>}/>}
        {admin &&   <Route path="/newproduct" element={<NewProduct/>}/>}
      </Routes>
      </div>
    </BrowserRouter>
//  <div>
//   <Topbar/>
//   <div className="container">
//   <Sidebar/>
//   <div className="others">
//     <Home/>
//   </div>
 
//   </div>
//  </div>
  );
}

export default App;
