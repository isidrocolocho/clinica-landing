import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-celeste-aqua">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img 
                            src="/images/Logo.png" 
                            alt="Logo" 
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Menú */}
                <nav className="hidden md:flex space-x-8">
                    <Link 
                        to="/" 
                        className="text-azul-navy font-bold hover:text-cyan-600"
                    >
                        Inicio
                    </Link>
                    <Link 
                        to="/somos" 
                        className="text-azul-navy font-bold hover:text-cyan-600"
                    >
                        ¿Quiénes somos?
                    </Link>
                    <Link 
                        to="/servicios" 
                        className="text-azul-navy font-bold hover:text-cyan-600"
                    >
                        Servicios
                    </Link>
                </nav>

                {/* Botones */}
                <div className="flex space-x-4">
                    <Link 
                        to="/registro" 
                        className="border border-gray-500 bg-white px-4 py-2 rounded-md hover:bg-gray-100"
                    >
                        Registrarse
                    </Link>
                    <Link 
                        to="/login" 
                        className="bg-verde-musgo text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
