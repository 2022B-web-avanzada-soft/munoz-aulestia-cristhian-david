//Stringly y Parse

const arregloUsuarios= [
    {
        id:1,
        nombre:"Cristhian",
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios)//Usuarios, Objetos
const usuario ={
    id:1,
    nombre:"Cristhian",
};

const objetoGuardado = JSON.stringify(usuario); // Arreglos,
console. log( ' arregloGuardado ' , arregloGuardado) ;
console. log(' objetoGuardado' , objetoGuardado) ;

const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(arregloGuardado);

console.log( 'arregloRestaurado',arregloRestaurado) ;
console.log('objetoRestaurado',objetoRestaurado) ;
