import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements ,RouterProvider ,Route } from "react-router-dom"
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contract from "./pages/Contract";
import SingleProduct from "./pages/SingleProduct";
import Loging from "./pages/Loging";
import SingleSignIn from "./pages/SingleSignIn";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

function App() {
  
const router = createBrowserRouter( createRoutesFromElements(
<Route path="/" element={<RootLayout/>}> 
<Route index element={<Home/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
<Route path ="/contract" element={<Contract/>}/>
<Route path ="/home/loging" element={<Loging/>}/>
<Route path ="/shop/:productId" element={<SingleProduct/>}/>
<Route path ="/home" element={<SingleSignIn/>}/>
<Route path ="/cart" element={<CartPage/>}/>
<Route path ="/checkout" element={<Checkout/>}/>

</Route>
)

);
  return <RouterProvider router={router}/>; 
}

export default App
