// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { nombre, apellido, correo, telefono, mensaje } = req.body;
  
      // Aquí puedes manejar los datos como desees, por ejemplo, guardarlos en una base de datos o enviarlos por correo
  
      // Simulación de una respuesta exitosa
      return res.status(200).json({ message: 'Mensaje recibido!' });
    }
  
    return res.status(405).json({ message: 'Método no permitido' });
  }