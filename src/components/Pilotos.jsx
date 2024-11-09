import React from 'react'
import useDrivers from '../hooks/driverHook';
import Card from 'react-bootstrap/Card';
import '../css/Pilotos.css'

const Pilotos = () => {

    const [drivers] = useDrivers();
  return (
    <div className='container'>
        {
            drivers.map((driver) => {
                return (
                <Card className='tarjeta' style={{ width: '16rem', backgroundColor:`#${driver.team_colour}`, color:'white' }}>
      <Card.Img className='imagen' variant="top" src={driver.headshot_url} />
      <Card.Body>
        <Card.Title style={{ fontSize: '20px'}}>{driver.first_name} {driver.last_name}</Card.Title>
        <Card.Text>
          Número: {driver.driver_number}
        </Card.Text>
        <Card.Text>
          País: {driver.country_code}
        </Card.Text>
        <Card.Text>
          Equipo: {driver.team_name}
        </Card.Text>
        <Card.Link style={{color:'black', textDecoration:'none'}} href="#">Más información</Card.Link>
      </Card.Body>
    </Card>)
            })
        }
        
    </div>
  )
}

export default Pilotos