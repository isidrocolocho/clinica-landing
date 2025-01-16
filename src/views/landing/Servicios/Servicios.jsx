import React from "react";

export default function Servicios() {
    return (
        <div>
            <section 
                className=" py-12 md:py-20 px-6 md:px-16 flex h-screen items-center justify-between"
                style={{
                    backgroundImage: "url('/images/SectionServicios.png')", 
                }}>
                {/* Contenedor de texto */}
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Servicios diseñados <br /> para tu salud y comodidad.
                    </h1>
                    <p className="text-lg text-gray-700 mt-4">
                    Explora una amplia gama de servicios diseñados para simplificar tu cuidado médico. Desde buscar especialistas hasta gestionar tus citas.
                    </p>
                    {/* Botones */}
                    <div className="flex flex-wrap gap-4 mt-6">
                    <button className="bg-teal-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-teal-600">
                        ¿Por qué elegirnos?
                    </button>
                    <button className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md shadow-md hover:bg-gray-800 hover:text-white">
                        ¿Cómo reservo una cita?
                    </button>
                    </div>
                </div>

                {/* Imagen */}
                <div className="hidden md:block">
                    <img
                        src="/images/DoctoraTel.webp"
                        alt="Doctora sonriente con celular"
                        className="rounded-lg shadow-lg w-auto h-60"
                    />
                </div>
            </section>
        </div>
    )
}