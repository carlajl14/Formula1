import React, { useEffect, useState } from 'react'
import getOnePiloto from '../services/getOnePiloto';

const usePiloto = (param) => {
    //State
    const [onepiloto, setOnepiloto] = useState([]);
    const [loading, setLoading] = useState(true);

    const piloto = async() => {
        setLoading(true); // Inicia la carga
        const newPiloto = await getOnePiloto(param);
        setOnepiloto(newPiloto);
        setLoading(false); // Finaliza la carga
    };

    //useEffect
    useEffect(() => {
        piloto();
    }, [param]);

    return [onepiloto, loading];
}

export default usePiloto;