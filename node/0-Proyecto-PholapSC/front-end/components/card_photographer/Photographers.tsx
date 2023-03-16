import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface PhotographersPopProps {
    name: string,
    last_name: string,
    date_birth: string,
    email: string
}

export default function (props: PhotographersPopProps){
    const {name, last_name, date_birth, email} = props;
    return(
        <>
            {
            <Card style={{ width: '18rem', alignItems: 'start'}}>
                <Card.Body>
                    <Card.Title><strong>Nueva Reservación</strong></Card.Title>
                    <Card.Text>
                        <strong>{name}{last_name} </strong><br/>
                        <strong>Email</strong>{email} <br/>
                        <strong>Fecha de Nacimiento: </strong>{date_birth} <br/>
                    </Card.Text>
                    <Button variant="danger">Rechazar</Button>
                    <Button variant="success">Aceptar</Button>
                </Card.Body>
            </Card>

            }
        </>
    )
}