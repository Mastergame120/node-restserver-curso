require('./config/config');

const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


/* Importa al ruta de usuarios */
/* se agrega /index ya que se configura globalmente las rutas*/
app.use(require('./routes/index'));



/* Conexion a bd de mongoose */
/* 'mongodb://localhost:27017/cafe' */
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos en ONLINE............');
});


//app.listen(3000, () => {
app.listen((process.env.PORT || 5000), () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});