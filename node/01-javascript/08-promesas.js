//08-promesas.js
const fs = require('fs');
/*
    Una funcion que acepte como parametro una variable
    del "path" del archivo y otra variable con et "contenidoArchivo".
    Utilizar eL modulo 'fs' para Leer eL archivo en ese "path" y anadir el
    "contenidoArchivo" a ese archivo.
*/
function promesaEsPar (numero){// f->promesa
    const miPrimerPromesa = new Promise(
        (resolve,reject) =>{
            if( numero % 2 === 0) { resolve(numero); /*return (then)*/ }
            else{ reject (':( no es par'); /*throw (catch)*/}
        }
    );
    return miPrimerPromesa;
}
function leerArchivos(path){

}
function escribirArchivos(path, contenidoArchivo){

}

fs.readFile(
    './01-variables.js',
    (errorLecturaArchivo2, contenidoArchivo2) => {
        if (errorLecturaArchivo2){
            console.log('Error leyendo Archivo1', errorLecturaArchivo2);
        } else{
            console.log('Contenido', contenidoArchivo2);
            file2 = contenidoArchivo2;
        }
    }
);

fs.writeFile(
    './06-nuevo-archivo.txt',
    file1= file1 + file2,
    (errorEscritura) => {
        if (errorEscritura){
            console.log('Error escribiendo en Archivo:', errorLecturaArchivo2);
        }else{
            console.log('Exito en la escritura en el nuevo archivo');
        }
    }
);

function ejercicio08(path, contenidoArchivo){
    return leerArchivos(path)
        .then(())

}

ejercicio08('06-ejemplo.txt', ':) lo logramos!')
.then()
.catch()