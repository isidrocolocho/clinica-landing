import { Link } from "react-router-dom";
//a
// import { useState } from "react";
import Button from "../../components/ui/botton";

const Navbar = () => {
   
    //const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-[#E6F4F1] px-4 py-2">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                  LOGO
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-4 ml-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Inicio</Link>
                <Link to="/somos" className="text-gray-700 hover:text-gray-900">¿Quienes somos?</Link>
                <Link to="/servicios" className="text-gray-700 hover:text-gray-900">Servicios</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/registro">Registrarse</Link>
              </Button>
              <Button variant="default" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" asChild>
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;
