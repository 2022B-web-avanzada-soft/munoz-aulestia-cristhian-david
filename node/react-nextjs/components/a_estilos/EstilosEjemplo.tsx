//components/a_estilos/EstilosEjemplo.tsx

import styles from "./estilos.module.css"
//****Los estilos deben de tener el nombre "module.css"****

export default function (){
    const misEstilos = {
        color: 'white',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };
    return (
        /*Para importar un estilo se lo debe declarar con {} y nombrar .styles*/
        <>
            <div style={misEstilos}> Otros estilos</div>
            <div className={styles.rojo}>Hola</div>

        </>
    )
}