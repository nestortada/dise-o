require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Configuración de Multer para manejar uploads en memoria
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(cors());
// No usamos express.json() ya que recibiremos multipart/form-data

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });

// Ruta /chat que acepta texto y archivos
app.post('/chat', upload.array('files'), async (req, res) => {
  const message = req.body.message;
  const files = req.files; // Array de archivos subidos

  // Aquí podrías guardar o procesar los archivos si lo deseas

  try {
    const prompts = [
      "Eres un experto en el campo y en cultivos colombianos. Responde en un solo párrafo de máximo 30 palabras.",
      message
    ];
    const result = await model.generateContent(prompts);
    const text = result.response.text();
    res.json({ reply: text });
  } catch (err) {
    console.error('Error al llamar a Gemini:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));