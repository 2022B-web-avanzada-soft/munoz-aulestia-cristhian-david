//08-promesas.js
const fs = require('fs');
/*
    Una funcion que acepte como parametro una variable
    del "path" del archivo y otra variable con et "contenidoArchivo".
    Utilizar eL modulo 'fs' para Leer eL archivo en ese "path" y anadir el
    "contenidoArchivo" a ese archivo.
*/

function leerArchivos(path){
    return new Promise(
        (resolve, reject) =>{
            fs.readFile(
                path,
                (errorLecturaArchivo, contenidoArchivo) => {
                    if (errorLecturaArchivo){
                        reject('No se leyó el archivo ;(')
                    } else{
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
}
function escribirArchivos(path, contenidoArchivo){
    return new Promise(
        (resolve,reject) =>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if (errorEscritura){
                        reject('No se escribio en el archivo ;(')
                    }else{
                        console.log('Si se escribio');
                    }
                }
            );
        }
    );
}

function ejercicio08(path, contenidoArchivo){
    return leerArchivos(path)
        .then(
            (contenido)=>{
                return escribirArchivos(path,contenido + contenidoArchivo);
            }
        )

}

ejercicio08('06-ejemplo.txt', ':) lo logramos!')
.then()
.catch()