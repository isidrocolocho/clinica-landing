'use client'

import  Button  from "../../../components/ui/botton"
import { Input } from "../../../components/ui/input"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#E6F4F1]">
      <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <Input
              id="usuario"
              type="text"
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1"
            />
          </div>
          <Button className="w-full bg-gradient-to-r from-[#2A9D8F] to-[#1e3a8a]">
            Iniciar Sesión
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link href="/registro" className="text-[#2A9D8F] hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}

