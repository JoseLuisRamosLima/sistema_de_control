import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import Chofer from "../models/chofer.model.js";
import Vehiculo from "../models/vehiculo.model.js";
import bcrypt from "bcryptjs";
import {TOKEN_SECRET} from "../config.js";
import { createAccessToken } from '../libs/jwt.js';





// import Chofer from "../models/chofer.model.js";
// import Coordenada from "../models/coordenada.model.js";
// import Gps from "../models/gps.model.js";
// import Grupo from "../models/grupo.model.js";
// import { json } from "sequelize";
// import Rol from "../models/rol.model.js";
// import Usuario_rol from "../models/roluser.model.js";
// import Ruta from "../models/ruta.model.js";
// import Vehiculo from "../models/vehiculo.model.js";




// PENDIENTE PARA SEPARAR EN AUTH.CONTROLLER.
// export const registerpersona = async(req, res)=>{
//     const {nombre, apellido_paterno, apellido_materno, edad} = req.body;
//     try {

//         const newPersona = await Persona.create({
//             nombre,
//             apellido_paterno,
//             apellido_materno,
//             edad,
//         });
//         const personaSave = await newPersona.save();
//         res.json({
//             personaid: personaSave.personaid,
//             nombre: personaSave.nombre,
//             apellido_paterno:personaSave.apellido_paterno,
//             apellido_materno: personaSave.apellido_materno,
//             edad : personaSave.edad,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };




export const registerusuario = async(req, res)=> {

    const { cargo, usuario, password } = req.body

    try {

        const userFound = await User.findOne( { where : {usuario} });
        
        if(userFound) { 
            return res.status(400).json(["El usuario ya está en uso"]);
        }
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            cargo,
            usuario,
            password: passwordHash,
        });

        const usuarioSave = await newUser.save();
        const token = await createAccessToken({usuarioid: usuarioSave.usuarioid})
        res.cookie('token', token)
        res.json({
            token:token,
            usuarioid: usuarioSave.usuarioid,
            cargo: usuarioSave.cargo,
            createdAt: usuarioSave.createdAt,
            updatedAt: usuarioSave.updatedAt,
        })
        

    } catch (error) {
        console.error("Error al buscar usuario:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }

};





export const login = async(req, res)=> {

    const { usuario, password } = req.body

    // console.log('Datos  recibidos:', nombre, apellidopa);
    try {
        
        const userFound = await User.findOne({ where: {usuario} });

        if(!userFound)
            return res.status(400).json (["Usuario no encontrado"]);
        
        // console.log(usuario);    //revisa q me devuelve 
        
        const isMatch = await bcrypt.compare(password, userFound.password);

        // console.log(isMatch);   //revisa que me devuelve
        if(!isMatch) 
            return res.status(400).json (["contraseña incorrecta"]);
        
        const token = await createAccessToken({usuarioid: userFound.usuarioid})
        res.cookie('token', token);
        res.json({
            usuarioid: userFound.usuarioid,
            usuario: userFound.usuario,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
        
    } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                // Manejar errores de validación específicos de Sequelize
                const validationErrors = error.errors.map((e) => ({
                    field: e.path,
                    message: e.message
                }));
                res.status(400).json({ error: 'Error de validación', details: validationErrors });
            } else {
                // Otros errores
                console.error(error);
                res.status(500).send('Error al registrar usuario');
            }
    }

};

export const loginapp = async(req, res)=>{
    const { codchofer, numplaca } = req.body
    try {
        const choferFount = await Chofer.findOne({ where: {codchofer}});
        if(!choferFount){
            return res.status(400).json(["Codigo Chofer no registrado"]);
        }

        const vehiculoFount = await Vehiculo.findOne({ where: {numplaca} })
        if(!vehiculoFount){
            return res.status(400).json(["numero placa no registrado"]);
        } 
        const token = await createAccessToken({ codchofer: choferFount.codchofer});
        res.cookie('token', token);
        res.json({
            codchofer: choferFount.codchofer,
            numplaca: vehiculoFount.numplaca,
            token:token
        })

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            // Manejar errores de validación específicos de Sequelize
            const validationErrors = error.errors.map((e) => ({
                field: e.path,
                message: e.message
            }));
            res.status(400).json({ error: 'Error de validación', details: validationErrors });
        } else {
            // Otros errores
            console.error(error);
            res.status(500).send('Error al conectar con BD - APP');
        }
    }

};



export const logout = (req, res)=> {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
}


export const profile = async (req, res) =>{

    const userFound = await User.findByPk(req.User.usuarioid);

    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado " });

    return res.json ({
        id: userFound.id,
        usuario: userFound.usuario,
        cargo: userFound.cargo,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    
    });
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies
    console.log("recibiendo bak")
    
    if(!token) return res.status(401).json({message : "No autorizado"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        
        if(err) return res.status(401).json({message: "No autorizado"})
    
        const userFound = await User.findByPk(user.usuarioid)
        if(!userFound) return res.status(401).json({message:"No autorizado"})
        return res.json({
            id:userFound.id,
            usuario : userFound.usuario,
        })

    })
    

}





// funcion para recibir datos y registrar dichos datos 
// a la base de datos 
// export const registerrol = async(req, res)=>{

//     const {modificar, baja, crear, admin} = req.body;
//     try{ 
//         const newRol = await Rol.create({
//             modificar, 
//             baja, 
//             crear, 
//             admin,
//         });
//         const rolSave = await newRol.save();

//         res.json({
//             rolid: rolSave.rolid,
//             modificar: rolSave.modificar,
//             baja: rolSave.baja,
//             crear: rolSave.crear,
//             admin: rolSave.admin,
//         });            
//     }catch(error){
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación de datos', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('Otros errores ');
//         }

//     }

// };




// export const registergps = async(req, res)=>{
//     const {punto1, punto2, punto3} = req.body;
//     try {

//         const newGps = await Gps.create({
//             punto1,
//             punto2,
//             punto3,
//         });
//         const gpsSave = await newGps.save();
//         res.json({
//             gpsid: gpsSave.gpsid,
//             punto1: gpsSave.punto1,
//             punto2:gpsSave.punto2,
//             punto3: gpsSave.punto3,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };


// export const registerchofer = async(req, res)=>{
//     const {codchofer, usuarioid} = req.body;
//     try {

//         const newChofer = await Chofer.create({
//             codchofer,
//             usuarioid,
//         });
//         const choferSave = await newChofer.save();
//         res.json({
//             choferid: choferSave.choferid,
//             codchofer: choferSave.codchofer,
//             createdAt: choferSave.createdAt,
//             updatedAt: choferSave.updatedAt,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };



// export const registervehiculo = async(req, res)=>{
//     const {cantidadpasajero, numplaca, modelo, color, marca, gpsid, choferid} = req.body;
//     try {

//         const newVehiculo = await Vehiculo.create({
//             cantidadpasajero,
//             numplaca,
//             modelo,
//             color,
//             marca,
//             gpsid,
//             choferid,

//         });
//         const vehiculoSave = await newVehiculo.save();
//         res.json({
//             vehiculoid: vehiculoSave.vehiculoid,
//             cantidadpasajero: vehiculoSave.cantidadpasajero,
//             numplaca: vehiculoSave.numplaca,
//             modelo: vehiculoSave.modelo,
//             color: vehiculoSave.color,
//             marca: vehiculoSave.marca,
//             gpsid: vehiculoSave.gpsid,
//             choferid: vehiculoSave.choferid,
//             createdAt: vehiculoSave.createdAt,
//             updatedAt: vehiculoSave.updatedAt,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };

// export const registergrupo = async(req, res)=>{
//     const {grupo, descripcion, vehiculoid} = req.body;
//     try {

//         const newGrupo = await Grupo.create({
//             grupo,
//             descripcion,
//             vehiculoid,
//         });
//         const grupoSave = await newGrupo.save();
//         res.json({
//             grupoid: grupoSave.grupoid,
//             descripcion: grupoSave.descripcion,
//             createdAt: grupoSave.createdAt,
//             updatedAt: grupoSave.updatedAt,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };

// export const registerruta = async(req, res)=>{
//     const {nombre, descripcion, 
//             latitud1, longitud1, latitud2, longitud2, latitud3, longitud3, usuarioid, grupoid} = req.body;
//     try {

//         const newRuta = await Ruta.create({
//             nombre,
//             descripcion,
//             latitud1,
//             longitud1,
//             latitud2,
//             longitud2,
//             latitud3,
//             longitud3,
//             usuarioid,
//             grupoid,
//         });
//         const rutaSave = await newRuta.save();
//         res.json({
//             rutaid: rutaSave.rutaid,
//             nombre: rutaSave.nombre,
//             descripcion: rutaSave.descripcion,
//             latitud1: rutaSave.latitud1,
//             longitud1: rutaSave.longitud1,
//             latitud2: rutaSave.latitud2,
//             longitud2: rutaSave.longitud2,
//             latitud3: rutaSave.latitud3,
//             longitud3: rutaSave.longitud3,
//             usuarioid: rutaSave.usuarioid,
//             grupoid: rutaSave.grupoid,
//             createdAt: rutaSave.createdAt,
//             updatedAt: rutaSave.updatedAt,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };




// export const registercoordenada = async(req, res)=>{
//     const {direccion, latitud, longitud} = req.body;
//     try {

//         const newCoordenada = await Coordenada.create({
//             direccion,
//             latitud,
//             longitud,
//         });
//         const coordenadaSave = await newCoordenada.save();
//         res.json({
//             coordenadaid: coordenadaSave.coordenadaid,
//             direccion: coordenadaSave.direccion,
//             latitud:coordenadaSave.latitud,
//             longitud: coordenadaSave.longitud,
//         });

        
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             const validationErrors = error.errors.map((e) => ({
//                 field: e.path,
//                 message: e.message
//             }));
//             res.status(400).json({ error: 'Error de validación', details: validationErrors });
//         } else {
//             // Otros errores
//             console.error(error);
//             res.status(500).send('otros errores');
//         }
//     }

// };

