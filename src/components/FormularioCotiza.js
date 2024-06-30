'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { sendEmail } from '@/app/api/sendEmail'; 

const FormularioCotiza = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    option: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      option: formData.option
    };

    sendEmail('service_fic8vt9', 'template_ofu025m', templateParams)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Solicitud enviada!',
          text: 'Tu solicitud ha sido enviada exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        // Restablecer el formulario
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          option: ''
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error al enviar tu solicitud',
          text: 'Ha ocurrido un error al intentar enviar tu solicitud. Inténtalo nuevamente, si el error persiste escribe directamente a contacto@asesoriasvaldivia.cl',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-8  rounded-lg ">
      <form onSubmit={handleSubmit} className="space-y-4 pb-20">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
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
          <label htmlFor="option" className="block text-sm font-bold text-gray-700">¿Qué servicio deseas consultar?</label>
          <select
            id="option"
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-custom-green rounded-md  focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="Asesoría Contable">Asesoría Contable</option>
            <option value="Asesoría Laboral">Asesoría Laboral</option>
            <option value="Asesoría Tributaria">Asesoría Tributaria</option>
            <option value="Auditoría">Auditoría</option>
          </select>
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
        <div className="flex items-center p-4">
          <Image
            src="/icons/flechaazulderecha.png"
            width={80}
            height={80}
            alt="Flecha azul"
          ></Image>
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

export default FormularioCotiza;
