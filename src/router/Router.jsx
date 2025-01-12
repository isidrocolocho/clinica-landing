import { Routes,Route } from "react-router-dom";
import Navbar from "../views/partials/Navbar";
import Footer from "../views/partials/Footer";
import Home from "../views/landing/home/Home";
import AboutUs from "../views/landing/AboutUs/AboutUs";
import Login from "../views/landing/login/login";
import Servicios from "../views/landing/Servicios/Servicios";
import Registro from "../views/landing/registro/registro";

const Router = () => {
    return(
        <div> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/somos" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
            <Footer/> 
        </div>
    )
}

export default Router;