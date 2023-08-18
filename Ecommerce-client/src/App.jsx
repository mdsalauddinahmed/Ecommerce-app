import { Route, Routes } from "react-router-dom"
import HomePages from "./Pages/HomePages"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Policy from "./Pages/Policy"
import Pagenotfound from "./Pages/pagenotfound"
import Register from "./Pages/Auth/Register"
import Login from "./Pages/Auth/Login"
import Category from "./Pages/Categories/Category"
import Cart from "./Pages/AddToCart/Cart"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/user/Dashboard"
import { PrivateRoute } from "./Componenets/Routes/Private"
import ForgotPassword from "./Pages/Auth/ForgotPassword"

 

function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePages></HomePages>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="" element={<Dashboard></Dashboard>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/policy" element={<Policy></Policy>}></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>
    </>
  )
}

export default App
