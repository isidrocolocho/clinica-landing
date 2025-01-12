export default function AboutUs() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-[#2A9D8F]">Conectando</span>
              <br />
              Pacientes
            </h1>
            <p className="text-gray-600">
              Unimos tecnología y salud para transformar tu experiencia médica. Nuestra plataforma te permite encontrar especialistas, agendar citas fácilmente y gestionar tu bienestar de manera eficiente, segura y accesible desde cualquier lugar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-12%20a%20la(s)%2012.14.57%E2%80%AFa.%C2%A0m.-OChQfUgcwovgoasiANCQRfpRdHjXBc.png"
              alt="Medical professional"
              width={300}
              height={400}
              className="rounded-lg"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-12%20a%20la(s)%2012.14.57%E2%80%AFa.%C2%A0m.-OChQfUgcwovgoasiANCQRfpRdHjXBc.png"
              alt="Medical procedure"
              width={300}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1e3a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Quienes Somos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1e3a8a]/80 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Visión</h3>
              <p>
                Facilitar el acceso a servicios médicos de calidad a través de una plataforma digital intuitiva y eficiente, conectando pacientes con especialistas de manera rápida, segura y accesible.
              </p>
            </div>
            <div className="bg-[#1e3a8a]/80 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Misión</h3>
              <p>
                Ser la solución líder en la gestión de citas médicas en línea, revolucionando la forma en que las personas interactúan con el sistema de salud.
              </p>
            </div>
            <div className="bg-[#1e3a8a]/80 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p>
                Impulsamos la innovación, garantizamos accesibilidad para todos y promovemos la confianza con un servicio seguro y transparente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

