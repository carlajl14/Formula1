import React from 'react'
import usePiloto from '../../hooks/onePilotoHook.js'
import useSessions from '../../hooks/sessionHook.js';
import Loader from '../Loader.jsx';
import { useParams } from 'react-router-dom';
import '../../css/Piloto.css'

const Piloto = () => {

    const params = useParams();
    const param = params.driver_number;
    const [piloto, loading] = usePiloto(param);
    const [sessions] = useSessions();
    const sessions_driver = {};

    // Verifica si los datos están cargando
    if (loading) {
        return <Loader />;
    }

    return (
        <div className=''>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Results of races</h1>
            <div className='container' style={{ color: 'white', marginTop: '10px', paddingLeft: '10px'}}>
            {
                piloto.map((p) => {
                    sessions
                    .filter((s) => s.session_key === p.session_key)
                    .map((s) => {
                        if (!sessions_driver[s.session_key]) {
                            sessions_driver[s.session_key] = { ...p, session_key: s.session_key, circuit_short_name: s.circuit_short_name, date_start: s.date_start };
                        } else {
                            sessions_driver[s.session_key] = { ...p, session_key: s.session_key, circuit_short_name: s.circuit_short_name, date_start: s.date_start  };
                        }
                    })
                })
            }
            {
                Object.keys(sessions_driver).map((key) => {
                    return (
                        <div className='piloto' style={{ color: 'white', marginBottom: '10px', marginRight: '10px', width: '16rem', padding: '5px'}} key={key}>
                            <p><span style={{ color: 'red'}}>Circuit:</span> {sessions_driver[key].circuit_short_name}</p>
                            <p><span style={{ color: 'red'}}>Date:</span> {sessions_driver[key].date_start.split("T")[0]}</p>
                            <p><span style={{ color: 'red'}}>Position:</span> {sessions_driver[key].position}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Piloto;