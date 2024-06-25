'use client'
import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { sendEmail } from '@/app/api/sendEmail'; 

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const formRef = useRef(null); // Referencia al formulario

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    sendEmail('service_fic8vt9', 'template_awrt69t', templateParams)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Respuesta enviada!',
          text: 'Tu mensaje ha sido enviado exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        // Restablecer el formulario
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error al enviar tu mensaje',
          text: 'Ha ocurrido un error al intentar enviar tu mensaje. Inténtalo nuevamente, si el error persiste escribe directamente a contacto@asesoriasvaldivia.cl',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-8 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 pb-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
            rows="5"
          />
        </div>
        <input type="hidden" name="to_email" value="contacto@asesoriasvaldivia.cl" />
        <div className="flex items-center p-4">
          <Image
            src="/icons/flechaazulderecha.png"
            width={80}
            height={80}
            alt="Flecha azul"
          />
          <button
            type="submit"
            className="w-1/2 py-2 px-2 border border-transparent text-2xl rounded-3xl text-custom-blue bg-custom-green hover:bg-custom-blue hover:text-custom-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioContacto;
