import React, { useEffect, useState } from 'react'
import getSessionsCircuit from '../services/getSessionsCircuit';

const useSessionsCircuit = (param) => {
    //State
    const [sessions, setSession] = useState([]);
    // const [loading, setLoading] = useState(true);

    const sessionsCircuit = async() => {
        // setLoading(true);
        const newSession = await getSessionsCircuit(param);
        setSession(newSession);
        // setLoading(false);
    };

    //useEffect
    useEffect(() => {
        sessionsCircuit();
    }, [param]);

    return [sessions];
}

export default useSessionsCircuit;