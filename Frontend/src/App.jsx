import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"


function App() {
  const {authUser}=useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <Routes>
        <Route path="/" element={authUser ? <Home></Home> : <Navigate to={"/login"}></Navigate>}></Route>
        <Route path="login" element={authUser ? <Navigate to={"/"}></Navigate> : <Login></Login>}></Route>
        <Route path="/signup" element={authUser ? <Navigate to={"/"}></Navigate> : <SignUp></SignUp>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
