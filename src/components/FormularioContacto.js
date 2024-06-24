'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
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

    // Aquí puedes agregar la lógica para enviar el formulario

    // Mostrar alerta de éxito
    Swal.fire({
      title: 'Formulario enviado!',
      text: 'Tu mensaje ha sido enviado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    // Restablecer el formulario
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="max-w-md mx-auto bg-trasparent  p-8  rounded-lg ">
      <form onSubmit={handleSubmit} className="space-y-4 pb-5 ">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 ">Nombre</label>
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
        
        <button
          type="submit"
          className="w-1/2 py-2 px-4 border font-bold border-transparent text-xl rounded-md text-custom-blue bg-custom-green hover:bg-custom-blue hover:text-custom-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
