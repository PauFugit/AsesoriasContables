'use client'

import { useState } from 'react';
import Image from 'next/image';

const FormularioCotiza = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Correo enviado exitosamente');
            } else {
                alert('Error al enviar el correo');
            }
        } catch (error) {
            alert('Error al enviar el correo');
        }
    };

    return (
        <div className="font-grotesk container mx-auto p-4 md:p-10">
          <h1 className="text-2xl text-custom-blue p-4 md:p-10 text-left">Para continuar completa el siguiente formulario</h1>
          <div className="p-4 md:p-8 rounded-lg w-full flex flex-col items-center justify-center">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold mb-1" htmlFor="nombre">* Nombre:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold mb-1" htmlFor="apellido">* Apellidos:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold mb-1" htmlFor="correo">* Correo:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold mb-1" htmlFor="telefono">Teléfono:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold mb-1" htmlFor="servicio">* ¿Qué servicio deseas cotizar?</label>
                  <select
                    className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="Asesorías Contables">Asesorías Contables</option>
                    <option value="Asesorías Laborales">Asesorías Laborales</option>
                    <option value="Asesorías Tributarias">Asesorías Tributarias</option>
                    <option value="Auditorías">Auditorías</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="text-custom-blue text-xl py-2 font-bold" htmlFor="mensaje">* Mensaje:</label>
                  <textarea
                    className="w-full px-3 py-2 h-36 rounded-xl border shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    maxLength="888"
                    required
                  />
                  <p className="text-right text-s text-custom-blue mt-1">*Los campos marcados con * son obligatorios.</p>
                </div>
                <div className="flex items-center justify-end">
                  <Image
                    src="/icons/flechaazulderecha.png"
                    width={100}
                    height={100}
                    alt="Ícono flecha azul a la derecha"
                  />
                  <button
                    className="bg-custom-green text-3xl text-custom-blue py-2 px-4 rounded-full hover:bg-custom-blue hover:text-custom-white focus:outline-none focus:shadow-outline flex items-center ml-4"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};

export default FormularioCotiza;