//==========================
//Puerto
//==========================

process.env.PORT = process.env.PORT || 5000;


//==========================
//Entorno
//==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//==========================
//Base de Datos
//==========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = 'mongodb+srv://admin:mastergame120@cluster0.v3vgi.mongodb.net/cafe';
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;