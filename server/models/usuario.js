/**** EN ESTA HOJA DE CODIGO SE ESCRIBE EL ESQUEMA DE LA BASE DE DATOS (ESQUEMA = TABLA DENTRO DE LA BD), EN ESTE CASO
 String nombre, String email, String password, String img, String role, String estado, String google *****/

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} No es un rol valido'
};


let Schema = mongoose.Schema;

/* Crea un esquema de usuario (Tabla de BD/ usuarioSchema) */
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        require: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

/* Este codigo esconde visualmente el campo password en postman, pero si lo trabaja internamente */
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

/* Se escribe este plugin que permite validar datos unicos (unique) */
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} Debe de ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);