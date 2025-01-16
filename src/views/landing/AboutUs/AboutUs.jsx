import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/FondoSectionAboutUS.png')", 
        }}
      >
        {/* Texto centrado */}
        <div className=" bg-opacity-80 px-8 py-6 text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-verde-aqua italic">Conectando</h1>
          <h1 className="text-5xl font-bold text-black">Pacientes</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Unimos tecnología y salud para transformar tu experiencia <br />
            médica. Nuestra plataforma te permite encontrar <br />
            especialistas, agendar citas fácilmente y gestionar tu <br />
            bienestar de manera eficiente, segura y accesible desde <br />
            cualquier lugar.
          </p>
        </div>
      </section>


      <section className="bg-azul-navy text-white py-12 px-4">
        <h2 className="text-center text-6xl italic font-bold mb-8">¿Quiénes Somos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visión */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Visión</h3>
            <p className="mb-4">
              Facilitar el acceso a servicios médicos de calidad a través de una
              plataforma digital intuitiva y eficiente, conectando pacientes con
              especialistas de manera rápida, segura y accesible.
            </p>
            <img
              src="/images/DocPaciente.jpg"
              alt="Doctor and patient"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Misión */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="mb-4">
              Ser la solución líder en la gestión de citas médicas en línea,
              revolucionando la forma en que las personas interactúan con el
              sistema de salud, promoviendo un acceso equitativo y transformando
              la experiencia médica a nivel global.
            </p>
            <img
              src="/images/MundoTech.jpg"
              alt="Global map"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Valores */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Valores</h3>
            <p className="mb-4">
              Impulsamos la innovación, garantizamos accesibilidad para todos y
              promovemos la confianza con un servicio seguro y transparente.
            </p>
            <img
              src="/images/apreton.webp"
              alt="Handshake"
              className="w-full rounded-lg mt-4"
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center h-screen p-6 md:p-12"
        style={{
          backgroundImage: "url('/images/SectionEquipo.png')",
        }}
      >
        {/* Contenedor del texto */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 text-center ">
          {/* Título principal */}
          <div>
            <h1 className="md:text-3xl font-bold text-gray-900 leading-tight">
              Conoce nuestro equipo
            </h1>
            <h1 className="md:text-3xl font-bold text-gray-900 leading-tight">
              de
              <span className="text-verde-aqua italic"> Desarrolladores</span>
            </h1>
          </div>
    
          <div className="pt-2">
            {/* Subtítulo */}
            <p className="mt-4text-gray-600 leading-snug">
              Un equipo comprometido con la creación de soluciones <br />
              innovadoras para transformar la experiencia médica.
            </p>
          </div>
          
        </div>
      </section>

    </div>
  )
}

