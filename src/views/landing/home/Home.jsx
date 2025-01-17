import React from "react";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pl-20">
            <h1 className="text-5xl sm:text-3xl font-bold mb-4">
              Tu salud, <br />
              <span className="text-verde-aqua font-black italic">nuestra prioridad.</span>
            </h1>

            <p className="text-gray-600 mb-8">
              Descubre una forma fácil y rápida de encontrar especialistas, agendar citas y gestionar tu cuidado médico desde cualquier dispositivo.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-black border-2 border-black hover:bg-gray-100 py-2 px-4 rounded">
                Agendar Cita
              </button>
              <button className="bg-azul-navy text-white hover:bg-blue py-2 px-4 rounded">
                Equipo Médico
              </button>
            </div>
          </div>
          <div className="relative h-64 sm:h-48">
            <img
              src="/images/estetoscopio.jpg"
              alt="Medical stethoscope heart"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-16 bg-white">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-20 pt-6 items-center md:items-start h-full">
          <h2 className="text-3xl md:text-4xl font-bold italic text-verde-aqua text-center md:text-left">
            Beneficios <span className="text-gray-900 not-italic">que</span> <br />
            <span className="text-gray-900 not-italic">hacen la diferencia.</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
            Descubre cómo nuestro sistema simplifica tu<br />
            experiencia médica con características clave y<br />
            ventajas exclusivas.
          </p>
          <a href="#" className="inline-block mt-6 text-teal-600 hover:underline font-medium">
            Más Información →
          </a>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src="/images/DiseñoBeneficios.png"
              alt="Collage Doctores"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
