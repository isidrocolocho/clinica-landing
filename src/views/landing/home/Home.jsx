import  Button  from "../../../components/ui/botton";
//import img from "next/image";

export default function Home() {
  return (
    <div>
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Tu salud, <br />
              <span className="text-[#2A9D8F]">nuestra prioridad.</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Descubre una forma fácil y rápida de encontrar especialistas, agendar citas y gestionar tu cuidado médico desde cualquier dispositivo
            </p>
            <div className="space-x-4">
              <Button className="bg-white text-black border-2 border-black hover:bg-gray-100">
                Agendar Cita
              </Button>
              <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                Equipo Médico
              </Button>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-12%20a%20la(s)%2012.14.34%E2%80%AFa.%C2%A0m.-nKAGYaoQQQv4anqPkqmboNhtRcMyYC.png"
              alt="Medical stethoscope heart"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#2A9D8F]">Beneficios</span> que
              <br />
              hacen la diferencia.
            </h2>
            <p className="text-gray-600">
              Descubre cómo nuestro sistema simplifica tu experiencia médica con características clave y ventajas exclusivas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

