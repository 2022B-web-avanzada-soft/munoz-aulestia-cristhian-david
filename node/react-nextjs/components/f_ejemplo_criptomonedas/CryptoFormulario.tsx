import {useEffect, useState} from "react";
import {MONEDAS} from "../d_hook_custom/monedas";
import {MonedasInterface} from "../../interfaces/moneda";
import useSelectMoneda from "../hooks/useSelectMoneda";

export default function ({setMonedas}){
    const [monedasArreglo, setMonedasArreglo] = useState(MONEDAS);
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([] as MonedasInterface[]);
    const [valorMoneda, SelectMonedaComponentes] = useSelectMoneda(
        'Seleccionar Moneda',
        monedasArreglo
    );
    const [valorCriptoMoneda, SelectCriptoMonedaComponente]= useSelectMoneda(
        'Seleccionar Criptmoneda',
        criptoMonedasArreglo
    );
    useEffect(
        ()=>{
            const consultarAPICripto = async ()=>{
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCriptos = dataPlana.Data.map(
                    (criptoMoneda)=>{
                        const criptoMonedaLocal: MonedasInterface ={
                            id: criptoMoneda.CoinInfo.Name,
                            nombre:criptoMoneda.CoinInfo.FullName,
                        }
                        return criptoMonedaLocal
                    }
                );
                setCriptoMonedasArreglo(arregloCriptos);
            }
            consultarAPICripto().then().catch((error)=>{
                console.error(error);
            });
        },
        []
    )

    const manejarSubmitFormulario = (e)=>{
        e.preventDefault();
    }

    return(
        <>
            <form onSubmit={manejarSubmitFormulario}>
                {SelectMonedaComponentes}
                {SelectCriptoMonedaComponente}
                <br/>
                <button className={'btn btn-primary w-100'} type={"submit"}>
                    Consultar
                </button>
            </form>
        </>
    )

}