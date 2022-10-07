import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Gallery from "./pages/Gallary/Gallery";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details";
import Division from "./pages/Division/Division";
import Famous from "./pages/Famous/Famous";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import GallaryPhotoViews from "./pages/GallaryPhotoView/GallaryPhotoView";
import Signup from "./pages/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import InsertPost from "./pages/AdminInsertPost/InsertPost";
import AdminHome from "./pages/AdminHome/AdminHome"
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminUpdatePost from "./pages/AdminUpdatePost/AdminUpdatePost";
import AdminDivision from "./pages/AdminDivision/AdminDivision";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<Home />}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/gallery/:placename" element={<GallaryPhotoViews/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/:title" element={<Details/>}/>
              <Route path="/division/:divisionname" element={<Division/>}/>
              <Route path="/famous/:famousplaces" element={<Famous title={"This is the title"}/>}/>
              <Route path="/search" element={<Search/>}/>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/forgotpass" element={<ForgotPassword/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/insert" element={<InsertPost/>}/>
            <Route path="/update" element={<AdminUpdatePost/>}/>
            <Route path="/admindivision/:divisionname" element={<AdminDivision/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
