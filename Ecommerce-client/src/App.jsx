import { Route, Routes } from "react-router-dom"
import HomePages from "./Pages/HomePages"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Policy from "./Pages/Policy"
import Pagenotfound from "./Pages/pagenotfound"
import Register from "./Pages/Auth/Register"
import Login from "./Pages/Auth/Login"

 

function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePages></HomePages>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/policy" element={<Policy></Policy>}></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>
    </>
  )
}

export default App
