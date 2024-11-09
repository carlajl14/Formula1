import React from 'react'
import useSessionsCircuit from '../hooks/sessionsCircuitHook.js';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Sessions = ({circuit_key}) => {

    const [sessions] = useSessionsCircuit(circuit_key);

    return (
        <div className='container'>
            <Card key={sessions.session_key} style={{ width: '20rem'}}>
            <ListGroup variant="flush" style={{ backgroundColor: "gray", paddingLeft: '30px', paddingTop: '10px', paddingBottom: '10px'}}>
            {
                sessions.map((session) => {
                    const fecha_start = session.date_start.split("T")[0];
                    const diaSemanaInicio = new Date(fecha_start).toLocaleDateString("en-US", {
                        weekday: 'short' // Solo el día de la semana
                    });
                    const horaInicio = session.date_start.split("T")[1].split(":")[0] + ":" + session.date_start.split("T")[1].split(":")[1];
                    const horaFin = session.date_end.split("T")[1].split(":")[0] + ":" + session.date_end.split("T")[1].split(":")[1];
                    return (
                        <ListGroup.Item style={{ paddingBottom: '5px' }}>{session.session_name}     {diaSemanaInicio} {horaInicio} - {horaFin}</ListGroup.Item>
                    )
                })
            }
            </ListGroup>
            </Card>
        </div>
    )
}

export default Sessions;