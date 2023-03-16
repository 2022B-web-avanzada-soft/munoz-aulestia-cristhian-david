import Layout from "../components/Layout";
import Photographers, {PhotographersPopProps} from "../components/card_photographer/Photographers";
import {useState} from "react";
import {NotificationsPopProps} from "../components/notification_websockets/Notificaciones";

export default function (){
    const [listPhotographers, setPhotographers] = useState([] as PhotographersPopProps[]);



    return(
        <>
            <div>
                <Layout title="Porfolios"></Layout>
                <div>
                    <div>
                        <h1>Photographers</h1>
                    </div>
                    <div>
                        {listPhotographers.map((photographerr, index)=>
                            <Photographers key={index}
                                           name={photographerr.name}
                                           last_name={photographerr.last_name}
                                           date_birth={photographerr.date_birth}
                                           email={photographerr.email}
                            />)

                        }
                    </div>
                </div>
                <h1>Hola como estas</h1>
            </div>
        </>
    );
}