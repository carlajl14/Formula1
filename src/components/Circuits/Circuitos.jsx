import React from 'react'
import useCircuits from '../../hooks/circuitHook.js';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Loader from '../Loader.jsx';

const Circuitos = () => {

    const [circuits, loading] = useCircuits();

    // Verifica si los datos están cargando
    if (loading) {
        return <Loader />;
    }

  return (
    <div className='container'>
        {
            circuits.map((circuit) => {
                const meeting_name = circuit.meeting_name.replace("FORMULA 1 ", "");
                const fecha_start = circuit.date_start.split("T")[0];
                return (
                    <Link className='link' to={"/circuito/" + circuit.circuit_key}>
                        <Card className='tarjeta' style={{ width: '16rem', color:'white' }} key={circuit.circuit_key}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '20px'}}>{meeting_name}</Card.Title>
                            <Card.Text>{circuit.country_name}</Card.Text>
                            <Card.Text>{fecha_start}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Circuitos