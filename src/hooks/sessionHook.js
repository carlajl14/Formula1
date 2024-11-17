import React, { useEffect, useState } from 'react'
import getSessions from '../services/getSessions';

const useSessions = () => {
    //State
    const [session, setSession] = useState([]);

    const sessions = async() => {
        const newSession = await getSessions();
        setSession(newSession);
    };

    //useEffect
    useEffect(() => {
        sessions();
    }, []);

    return [session];
}

export default useSessions;