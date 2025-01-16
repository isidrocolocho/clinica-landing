import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    if (email === "user@example.com" && password === "password123") {
      navigate("/dashboard"); // Redirige al Dashboard
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Menú lateral */}
      <aside className="bg-teal-600 w-16 md:w-20 flex flex-col items-center py-4">
        <div className="mb-6">
          <button className="text-white">
            <i className="fas fa-bars text-lg md:text-xl"></i>
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <button className="text-white">
            <i className="fas fa-user text-lg md:text-xl"></i>
          </button>
          <button className="text-white">
            <i className="fas fa-door-open text-lg md:text-xl"></i>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-white p-6 md:p-10">
        {/* Sección de servicios */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="/images/dermatologia.jpg"
                alt="Dermatología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full"
              />
              <p className="font-medium">Dermatología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/cardiologia.jpg"
                alt="Cardiología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full"
              />
              <p className="font-medium">Cardiología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/nutricion.jpg"
                alt="Nutrición"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full"
              />
              <p className="font-medium">Nutrición</p>
            </div>
            <div className="text-center">
              <img
                src="/images/odontologia.jpg"
                alt="Odontología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full"
              />
              <p className="font-medium">Odontología</p>
            </div>
          </div>
        </section>

        {/* Sección de equipo */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="/images/doctor1.jpg"
                alt="Dr. Mario Argueta"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dr. Mario Argueta</p>
              <p className="text-sm">Especialista en cardiología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/doctor2.jpg"
                alt="Dra. Jessica Moran"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dra. Jessica Moran</p>
              <p className="text-sm">Especialista en nutrición</p>
            </div>
            <div className="text-center">
              <img
                src="/images/doctor3.jpg"
                alt="Dr. Luis López"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dr. Luis López</p>
              <p className="text-sm">Especialista en dermatología</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
