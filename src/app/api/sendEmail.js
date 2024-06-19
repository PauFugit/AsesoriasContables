import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, correo, telefono, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'paulinefugit@gmail.com', // Reemplaza con el correo donde quieras recibir los datos
      subject: 'Nuevo mensaje del formulario de contacto',
      text: `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Correo: ${correo}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al enviar el correo', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}