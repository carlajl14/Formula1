import React from 'react'
import useCircuit from '../hooks/oneCircuitHook';
import Card from 'react-bootstrap/Card';
import Sessions from './Sessions.jsx';
import { useParams } from 'react-router-dom';
import img2 from '../assets/images/2.png';
import img4 from '../assets/images/4.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img14 from '../assets/images/14.png';
import img15 from '../assets/images/15.png';
import img19 from '../assets/images/19.png';
import img22 from '../assets/images/22.png';
import img23 from '../assets/images/23.png';
import img39 from '../assets/images/39.png';
import img46 from '../assets/images/46.png';
import img49 from '../assets/images/49.png';
import img55 from '../assets/images/55.png';
import img61 from '../assets/images/61.png';
import img63 from '../assets/images/63.png';
import img65 from '../assets/images/65.png';
import img70 from '../assets/images/70.png';
import img144 from '../assets/images/144.png';
import img149 from '../assets/images/149.png';
import img150 from '../assets/images/150.png';
import img151 from '../assets/images/151.png';
import img152 from '../assets/images/152.png';  
import Loader from '../components/Loader.jsx';
import '../css/Circuito.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Circuito = () => {

    const params = useParams();
    const param = params.circuit_key;
    const [circuit,loading] = useCircuit(param);
    const id_circuit = [2, 4, 6, 7, 9, 10, 14, 15, 19, 22, 23, 39, 46, 49, 55, 61, 63, 65, 70, 144, 149, 150, 151, 152];
    const images = [img2, img4, img6, img7, img9, img10, img14, img15, img19, img22, img23, img39, img46, img49, img55, img61, img63, img65, img70, img144, img149, img150, img151, img152];

    // Verifica si los datos están cargando
    if (loading) {
        return <Loader />;
    }

  return (
    <div className='content' style={{ width: '100%'}}>
        {
            circuit.map((c) => {
                const img = images[id_circuit.indexOf(c.circuit_key)];
                const fecha_start = c.date_start.split("T")[0];
                const horaInicio = c.date_start.split("T")[1].split(":")[0] + ":" + c.date_start.split("T")[1].split(":")[1];
                return (
                    <Container>
                    <Row key={c.circuit_key}>
                        <Col>
                        <Card className='' style={{ width: '20rem', color:'white', textAlign:'center' }} key={c.circuit_key}>
        <Card.Img className='imagen' variant="left" src={img}/>
            <Card.Body>
                <Card.Title style={{ fontSize: '20px'}}>{c.meeting_name}</Card.Title>
                <Card.Text>{c.country_name}</Card.Text>
                <Card.Text>{fecha_start} {horaInicio}</Card.Text>
            </Card.Body>
        </Card> 
                        </Col>
                        <Col>
                            <Sessions circuit_key={c.circuit_key}/>
                        </Col>
                    </Row>
                    </Container>
                )
            })
            
        }            
    </div>
  )
}

export default Circuito