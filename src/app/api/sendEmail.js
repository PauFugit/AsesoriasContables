// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message, option } = req.body;

    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Cambia esto a tu proveedor de correo
      port: 587, // o el puerto que uses
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: 'your-email@example.com', // tu correo
        pass: 'your-email-password', // tu contraseña
      },
    });

    try {
      // Enviar el correo
      await transporter.sendMail({
        from: '"Formulario de Contacto" <your-email@example.com>',
        to: 'recipient@example.com', // dirección de destino
        subject: 'Nuevo mensaje del formulario de contacto',
        text: `Nombre: ${firstName} ${lastName}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}\nOpción seleccionada: ${option}`,
      });

      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
