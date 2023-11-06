const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const transporter = require('../config/mailer');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    res.status(400).json({ mensaje: 'Por favor ingresa todos los datos' });
  } else {
    // Comprueba si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ mensaje: 'Este usuario ya está registrado' });
    } else {
      // Hashea la contraseña
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);
      
      // Crea el usuario en la base de datos
      const usuario = await User.create({
        nombre,
        correo,
        contraseña: passwordHashed,
        rol,
      });

      if (usuario) {
        res.status(201).json({
          _id: usuario._id,
          nombre: usuario.nombre,
          correo: usuario.correo,
          rol: usuario.rol,
        });
      } else {
        res.status(400).json({ mensaje: 'No se pudo crear el usuario, verifica tus datos' });
      }
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { correo, contraseña } = req.body;
  // Comprueba el correo y la contraseña
  const usuario = await User.findOne({ correo });

  if (usuario && (await bcrypt.compare(contraseña, usuario.contraseña))) {
    const token = generateToken(usuario._id, usuario.nombre);
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol,
      token,
    });
  } else {
    res.status(400).json({ mensaje: 'Credenciales incorrectas' });
  }
});

// Función para generar un token JWT
const generateToken = (id, nombre) => {
  return jwt.sign({ id, nombre }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const getUserData = asyncHandler(async (req, res) => {
  res.json(req.usuario);
});

const enviarCorreo = asyncHandler(async (req, res) => {
  const { usuario } = req.body; // Suponiendo que pasas 'usuario' en el cuerpo de la solicitud

  try {
    // Envía el correo con el objeto de transporte definido
    await transporter.sendMail({
      from: '"Date VozyBank👻" <yn.acst.mz@gmail.com>',
      to: usuario.correo, // Suponiendo que 'usuario' tiene una propiedad 'correo'
      subject: 'Hola ✔',
      html: '<b>Por favor, confirma tu asistencia</b>', // Cuerpo HTML
    });

    res.json({ mensaje: 'Correo electrónico enviado con éxito' });
  } catch (error) {
    return res.status(400).json({ mensaje: 'Algo salió mal' });
  }
});

module.exports = {
  registerUser,
  loginUser,
  getUserData,
  enviarCorreo,
};
