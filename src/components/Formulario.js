'use client'
// components/FormularioContacto.js
import { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-between mb-8 md:mb-0">
              <div className="mb-8 md:mb-0">
                <p className="text-gray-700 text-sm">Para más información, contáctanos a través del formulario.</p>
              </div>
              <div className="hidden md:block mt-24 bg-green-100 p-4 rounded-lg text-green-600">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-left mb-6">Para continuar completa el siguiente formulario:</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1" htmlFor="nombre">*Nombre:</label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1" htmlFor="apellido">*Apellido:</label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1" htmlFor="correo">*Correo:</label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1" htmlFor="telefono">Teléfono:</label>
                  <input
                    className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1" htmlFor="mensaje">*Mensaje:</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    maxLength="888"
                    required
                  />
                  <p className="text-right text-xs mt-1">*máximo 888 caracteres</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline flex items-center"
                    type="submit"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
            <div className="md:hidden w-full mt-8">
              <div className="bg-green-100 p-4 rounded-lg text-green-600">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Formulario;
