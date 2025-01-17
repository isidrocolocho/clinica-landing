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
            
            <section>
            <div className=" bg-white grid grid-rows-4 grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto">
        
                <div classNam= "text-center mb-8 ">
                <h1 className="text-3xl font-bold mb-2">Porque elegirnos?</h1>
                </div>
                <div className=" text-center p-4 font-bold text-lg">
                    Descubre lo que hace que nuestra 
                    plataforma sea unica y confiable
                </div>

                <div className=" text-center p-4 font-medium">Busqueda persoanlizada</div>
                <div className="flex justify-center items-center">
                    <img
                    src="/images/busqpersonal.jpg"
                    alt="Imagen redondeada"
                    className="w-80 h-20 rounded-full object-cover shadow-lg"
                    />
                </div>

            
                <div className=" text-center p-4 font-medium">Gestion Simplificada</div>
                <div className="flex justify-center items-center">
                    <img
                    src="/images/gestion.jpg"
                    alt="Imagen redondeada"
                className="w-80 h-20 rounded-full object-cover shadow-lg"
                    />
                </div>

                
                <div className=" text-center p-4 font-medium">Accesibilidad Total</div>
                <div className="flex justify-center items-center">
                    <img
                    
                    src="/images/accesibilidad.jpg"
                    alt=" redondeada"
                className="w-80 h-20 rounded-full object-cover shadow-lg"
                    />
                </div>
                </div>

        </section>

    <section className="p-6 bg-blue-600">
       {/* Título y Subtítulo */}
      <div className="text-center mb-8 text-black">
        <h1 className="text-3xl font-bold mb-2">Como reservo una cita?</h1>
        <p className="text-black">Sigue estos sencillos pasos y programa tu proxima consulta en minutos</p>
      </div>

      {/* Contenedor de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {/* Tarjeta 1 */}
        <div className=" bg-blue-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4" >
          <img
            src="/images/registrate.png"
            alt="Imagen 1"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black">1.</h2>
            <p className="text-black">Crea una cuenta o accede con tus credenciales en minutos.Es el primer paso para disfrutar de todos nuestros servicios.</p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className=" bg-blue-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4">
          <img
            src="/images/busqueda.jpg"
            alt="Imagen 2"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black">2.</h2>
            <p className="text-black">Usa la busqueda avanzada para encontrar medicos por especialidad ,</p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className=" bg-blue-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4">
          <img
            src="/images/calendario.webp"
            alt="Imagen 3"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black">3.</h2>
            <p className="text-black">Selecciona el horario ideal desde nuestro calendario interactivo, adaptado a tu rutina</p>
          </div>
        </div>

        {/* Tarjeta 4 */}
            <div className=" bg-blue-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4">
          <img
            src="/images/confi.jpg"
            alt="Imagen 3"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black"> 4.</h2>
            <p className="text-black">Revisa los detalles y confirma en un clic.Recibiras una notificacion con toda la informacion necesaria..</p>
          </div>
        </div>
      </div>

      {/* Título centrado */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold">!Que esperas para agendar tu futura cita!</h3>
      </div>

      {/* Botón de Registro */}
      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Regístrate 
        </button>
      </div>
    </section>
        </div>
    )
}