import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminRoutes from "./routes/admin/AdminRoutes";
import UserRoutes from "./routes/user/UserRoutes";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
      <Route path="/user" element={<UserRoutes/>}/>
      
    </Routes>
    </>
  );
}

export default App;
